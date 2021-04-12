import { HideBlogArticlePContent } from './modules/blogsDOM.js';
import { Showmore, toggleBtn } from './modules/clicksOnly.js';
import { Blogs } from '../../dbPlaceholder/db.js';
import { InsertContent } from './modules/blogsDOMInsertContent.js';

toggleBtn();
// HideBlogArticlePContent();

// for (let i = 0; i < Blogs.length; i++) {
//     console.log( Blogs[i].author);
// }
InsertContent(Blogs);
Showmore(Blogs);

