export const POSTS = [
  { slug: "how-to-download-videos-from-any-link", title: "How to download videos from any link (2026 guide)", excerpt: "A step-by-step tutorial to save videos on phone and desktop using just a URL.", date: "2026-10-28", body: ["Copy the URL of the video from your browser address bar or the app's Share → Copy link option.", "Open GrabLink and paste the link into the input box at the top of the home page.", "Press Download, wait a few seconds for the link to be analyzed, then pick your preferred quality (1080p, 720p) or audio-only MP3.", "On iPhone, files go to the Files app → Downloads. On Android they land in the Downloads folder. On desktop, check your browser's download bar.", "Tip: if a link fails, make sure the post is public and the URL starts with https://."] },
  { slug: "mp4-vs-mp3-which-format", title: "MP4 vs MP3: which format should you choose?", excerpt: "Understand the difference between video and audio formats before downloading.", date: "2026-10-20", body: ["MP4 is a video container that keeps both image and sound. Choose it when you want to watch the content later.", "MP3 is audio only. It is much smaller and ideal for music, podcasts and lectures.", "Higher resolution means bigger files: 1080p is crisp on large screens, 720p is enough for phones."] },
  { slug: "download-safely-and-legally", title: "How to download safely and legally", excerpt: "Respect copyright and protect your device while saving media online.", date: "2026-10-12", body: ["Only download content you own, that is in the public domain, or that the creator allows you to save.", "Avoid sites that ask you to install extensions or executables — GrabLink works fully in your browser.", "Keep your browser updated and never enter passwords on downloader sites."] },
];

export const FAQS = [
  ["Is GrabLink free?", "Yes. GrabLink is 100% free with no download limits and no account required."],
  ["Which sites are supported?", "Most public video, audio and image links from popular social and media platforms work. Just paste the URL and try."],
  ["Where are my files saved?", "Files go to your device's default Downloads folder. On iPhone check the Files app → Downloads."],
  ["Does it work on mobile?", "Yes, GrabLink works in any modern browser on Android, iPhone, tablets and computers."],
  ["Do you store my downloads?", "No. We don't keep copies of your files or a history of the links you paste."],
  ["Is downloading legal?", "Downloading content you own or have permission to use is fine. Always respect copyright and the platform's terms."],
  ["Why did my link fail?", "The post may be private, deleted or region-locked. Check the URL starts with https:// and try again."],
] as const;

export const HOT = [
  { title: "Top music video of the week", source: "Video · 4:12", tag: "🔥 Trending" },
  { title: "Viral cooking short", source: "Short · 0:45", tag: "🔥 Trending" },
  { title: "Live concert highlights", source: "Video · 12:30", tag: "Popular" },
  { title: "Podcast episode #142", source: "Audio · 58:00", tag: "Popular" },
  { title: "Travel vlog: Lisbon in 4K", source: "Video · 9:05", tag: "Popular" },
  { title: "Wallpaper pack: neon city", source: "Images · 24", tag: "Popular" },
];

export const NEWS = [
  { date: "2026-10-30", title: "MP3 320kbps now available", text: "Extract audio at the highest quality from any supported video link." },
  { date: "2026-10-15", title: "4 new languages", text: "GrabLink is now available in Spanish, Portuguese, German and French." },
  { date: "2026-09-28", title: "Faster processing", text: "New servers cut link analysis time by up to 60%." },
];
