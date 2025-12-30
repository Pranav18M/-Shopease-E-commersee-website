// src/components/common/LoadingSpinner.jsx

const LoadingSpinner = ({ size = 'medium', text = 'Loading...', fullScreen = false }) => {
  const sizes = {
    small: 'w-8 h-8 border-2',
    medium: 'w-16 h-16 border-4',
    large: 'w-24 h-24 border-4',
  };

  const textSizes = {
    small: 'text-sm',
    medium: 'text-lg',
    large: 'text-xl',
  };

  const spinner = (
    <div className="flex flex-col items-center justify-center gap-4">
      <div
        className={`${sizes[size]} border-gray-200 dark:border-gray-800 border-t-primary rounded-full animate-spin`}
      />
      {text && (
        <p className={`${textSizes[size]} text-gray-600 dark:text-gray-400 font-medium`}>
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-black to-gray-900 dark:from-black dark:to-gray-950 flex items-center justify-center z-[9999]">
        <div className="text-white">
          {spinner}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-20">
      {spinner}
    </div>
  );
};

export default LoadingSpinner;