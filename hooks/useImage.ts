import { useState } from 'react';

type ImageProps = {
  initialValue: string;
};

type ImageResult = {
  uri: string;
  error: string | null;
  onImageChange: (value: string) => void;
};

const validate = (value: string): string | null => {
  if (value.length === 0) {
    return 'No image';
  }

  return null;
};

const useImage = ({ initialValue }: ImageProps): ImageResult => {
  const [uri, setUri] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);

  const onImageChange = (image: string) => {
    setUri(image);

    const errorMessage = validate(image);
    setError(errorMessage);
  };

  return { uri, error, onImageChange };
};

export default useImage;
