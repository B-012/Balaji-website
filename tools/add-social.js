const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '..');

const socialSharingCode = `
<!-- Social Sharing Floating Bar -->
<style>
.social-share-bar {
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  z-index: 1000;
}
.social-share-bar a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  color: white;
  font-size: 20px;
  transition: 0.3s;
  text-decoration: none;
}
.social-share-bar a:hover {
  width: 55px;
}
.share-fb { background: #3b5998; }
.share-tw { background: #1da1f2; }
.share-wa { background: #25d366; }
.share-in { background: #007bb5; }
@media (max-width: 768px) {
  .social-share-bar {
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    flex-direction: row;
    transform: none;
  }
  .social-share-bar a {
    flex: 1;
    height: 50px;
  }
  .social-share-bar a:hover {
    width: 100%;
  }
}
</style>
<div class="social-share-bar">
  <a href="https://www.facebook.com/sharer/sharer.php?u=https://balaji-website-zeta.vercel.app/" target="_blank" class="share-fb" title="Share on Facebook"><i class="fab fa-facebook-f"></i></a>
  <a href="https://twitter.com/intent/tweet?url=https://balaji-website-zeta.vercel.app/&text=Check%20out%20these%20amazing%20tour%20packages!" target="_blank" class="share-tw" title="Share on Twitter"><i class="fab fa-twitter"></i></a>
  <a href="https://api.whatsapp.com/send?text=Check%20out%20these%20amazing%20tour%20packages!%20https://balaji-website-zeta.vercel.app/" target="_blank" class="share-wa" title="Share on WhatsApp"><i class="fab fa-whatsapp"></i></a>
  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://balaji-website-zeta.vercel.app/" target="_blank" class="share-in" title="Share on LinkedIn"><i class="fab fa-linkedin-in"></i></a>
</div>
`;

['blog.html', 'packages.html'].forEach(filename => {
    const filePath = path.join(directoryPath, filename);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        if (!content.includes('Social Sharing Floating Bar')) {
            content = content.replace('</body>', socialSharingCode + '\n</body>');
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Added Social Sharing to: ' + filename);
        } else {
            console.log('Social Sharing already exists in: ' + filename);
        }
    }
});
