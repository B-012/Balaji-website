const fs = require('fs');

const map = {
  '"kashmir.jpg"': '"https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?q=80&w=600"',
  '"chardham.jpg"': '"https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600"',
  '"rajasthan.jpg"': '"https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=600"',
  '"goa.jpg"': '"https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=600"',
  '"kerala.jpg"': '"https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=600"',
  '"andaman.jpg"': '"https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=600"',
  '"dubai.jpg"': '"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600"',
  '"thailand.jpg"': '"https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=600"',
  '"singapore.jpg"': '"https://images.unsplash.com/photo-1565967511849-75a6fd7f9a27?q=80&w=600"',
  '"europe.jpg"': '"https://images.unsplash.com/photo-1533240332313-0db49b439ad3?q=80&w=600"',
  '"maldives.jpg"': '"https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=600"',
  '"manali.jpg"': '"https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600"',
  '"northeast.jpg"': '"https://images.unsplash.com/photo-1571167448666-4d0fb64e4b52?q=80&w=600"',
  '"bhutan.jpg"': '"https://images.unsplash.com/photo-1582650570390-333e83ea6472?q=80&w=600"',
  '"srilanka.jpg"': '"https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=600"'
};

const files = ['js/data.js', 'balaji-travels-theme/js/data.js'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  for (const [key, value] of Object.entries(map)) {
    content = content.replace(key, value);
  }
  if (original !== content) {
    fs.writeFileSync(file, content);
    console.log(`Updated images in ${file}`);
  }
});
