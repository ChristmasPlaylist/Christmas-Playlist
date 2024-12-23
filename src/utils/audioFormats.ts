export function getSupportedFormats(): string[] {
  const audio = document.createElement('audio');
  
  // Order formats by preference (mp3 first as it's most widely supported)
  const formatTests = [
    { format: 'mp3', type: 'audio/mpeg' },
    { format: 'aac', type: 'audio/aac' },
    { format: 'ogg', type: 'audio/ogg; codecs="vorbis"' },
    { format: 'wav', type: 'audio/wav' }
  ];

  return formatTests
    .filter(({ type }) => audio.canPlayType(type).replace(/no/, ''))
    .map(({ format }) => format);
}