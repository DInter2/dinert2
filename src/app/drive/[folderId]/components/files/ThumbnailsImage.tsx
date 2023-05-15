import { FileDto } from '@/app/types/File';
import Image from 'next/image';

export default function Thumbnail({ file, blobUrl }: { file: FileDto, blobUrl: string }) {

  return (
    <div>
      <Image
        src={blobUrl}
        alt={`Thumbnail for ${file.name}`}
        width={640}
        height={360}
      />
      <h2>{file.name}</h2>
    </div>
  );
}

