import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Upload, Video, X, AlertCircle } from 'lucide-react';

export default function VideoUpload() {
  const [uploading, setUploading] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [uploadedVideos, setUploadedVideos] = useState<string[]>([]);

  const uploadVideo = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      setError('');

      if (!supabase) {
        throw new Error('Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.');
      }

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select a video to upload.');
      }

      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError, data } = await supabase.storage
        .from('videos')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('videos')
        .getPublicUrl(filePath);

      setVideoUrl(publicUrl);
      setUploadedVideos([...uploadedVideos, publicUrl]);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setUploading(false);
    }
  };

  const removeVideo = () => {
    setVideoUrl('');
    setError('');
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Video className="w-6 h-6" />
          Video Upload
        </h2>

        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-red-800 font-medium">Error</p>
              <p className="text-red-700 text-sm mt-1">{error}</p>
              {error.includes('buckets') && (
                <div className="mt-3 p-3 bg-white rounded border border-red-200">
                  <p className="text-sm font-medium text-gray-900 mb-2">Setup Required:</p>
                  <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                    <li>Go to your Supabase Dashboard</li>
                    <li>Navigate to Storage section</li>
                    <li>Create a new bucket named "videos"</li>
                    <li>Make it public</li>
                    <li>Set allowed MIME types: video/mp4, video/webm, video/ogg</li>
                    <li>Return here and try uploading again</li>
                  </ol>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="space-y-6">
          <div>
            <label
              htmlFor="video-upload"
              className={`
                flex flex-col items-center justify-center w-full h-48
                border-2 border-dashed rounded-xl cursor-pointer
                transition-all duration-200
                ${uploading
                  ? 'border-gray-300 bg-gray-50'
                  : 'border-gray-300 hover:border-blue-500 hover:bg-blue-50'
                }
              `}
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className={`w-12 h-12 mb-3 ${uploading ? 'text-gray-400' : 'text-gray-500'}`} />
                <p className="mb-2 text-sm text-gray-700">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">
                  MP4, WebM, OGG (MAX. 100MB)
                </p>
                {uploading && (
                  <p className="mt-2 text-sm text-blue-600 font-medium">Uploading...</p>
                )}
              </div>
              <input
                id="video-upload"
                type="file"
                accept="video/mp4,video/webm,video/ogg,video/quicktime"
                onChange={uploadVideo}
                disabled={uploading}
                className="hidden"
              />
            </label>
          </div>

          {videoUrl && (
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden bg-black">
                <video
                  src={videoUrl}
                  controls
                  className="w-full"
                >
                  Your browser does not support the video tag.
                </video>
                <button
                  onClick={removeVideo}
                  className="absolute top-2 right-2 p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                <p className="text-xs font-medium text-gray-600 mb-1">Video URL:</p>
                <code className="text-xs text-gray-800 break-all">{videoUrl}</code>
              </div>
            </div>
          )}

          {uploadedVideos.length > 0 && !videoUrl && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Previously Uploaded Videos</h3>
              <div className="space-y-3">
                {uploadedVideos.map((url, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <code className="text-xs text-gray-800 break-all">{url}</code>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
