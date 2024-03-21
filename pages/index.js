import Layout from '../components/Layout';
import PhotoList from '../components/PhotoList';

const photos = [
  { src: '/askim1.jpeg', alt: 'Askim 1' },
  { src: '/askim2.jpeg', alt: 'Askim 2' },
  { src: '/askim3.jpeg', alt: 'Askim 2' },
  { src: '/askim4.jpeg', alt: 'Askim 2' },
  { src: '/askim5.jpeg', alt: 'Askim 2' },
  { src: '/askim6.jpeg', alt: 'Askim 2' }
  // Diğer fotoğraflar...
];

export default function Home() {
  return (
    <Layout>
      <h1>Sevgilimle Anılarımız</h1>
      <PhotoList photos={photos} />
    </Layout>
  );
}
