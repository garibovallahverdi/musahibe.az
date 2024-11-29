import RelatedBox from "../../shared/RelatedBox";

const Reading = () => {

  const placeholders = Array.from({ length: 6 });

  const blogContent = `
  <h1>The Ultimate Guide to Blogging</h1>
   &nbsp;

  <img src="https://plus.unsplash.com/premium_photo-1707127783342-4bf96ef771de?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
   &nbsp;

  <p>Blogging is a <strong>powerful way</strong> to share your ideas, connect with others, and even build a brand. Whether you're new to blogging or looking to improve, this guide will provide you with all the essentials.</p>
  
  <h2>Why Start a Blog?</h2>
  <p>
    Starting a blog allows you to express yourself, showcase your expertise, and even earn income. Here are some of the benefits of blogging:
  </p>
  <ul>
    <li>Builds your personal or professional brand.</li>
    <li>Connects you with like-minded individuals.</li>
    <li>Helps you improve your writing skills.</li>
  </ul>
   &nbsp;
  
  <img src="https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D" alt="Blogging illustration" style="width: 100%; height: auto; margin: 20px 0;"/>
   &nbsp;

  <h2>Tips for Writing a Great Blog</h2>
  <p>Here are some tips to make your blog engaging and valuable for your audience:</p>
  <ol>
    <li>Write for your audience, not for yourself.</li>
    <li>Keep your paragraphs short and easy to read.</li>
    <li>Use images and videos to make your content visually appealing.</li>
    <li>Optimize your blog for <a href="https://www.google.com/search?q=seo" target="_blank" rel="noopener noreferrer">SEO</a>.</li>
  </ol>

  

  <h2>Common Mistakes to Avoid</h2>
  <p>Even experienced bloggers can make mistakes. Here are some things to watch out for:</p>
  <ul>
    <li>Not having a clear focus or niche.</li>
    <li>Overlooking the importance of visuals.</li>
    <li>Ignoring audience feedback.</li>
  </ul>
   &nbsp;

  <img src=https://plus.unsplash.com/premium_photo-1707080369554-359143c6aa0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D" alt="SEO tips" style="width: 100%; height: auto; margin: 20px 0;"/>
   &nbsp;

   &nbsp;

  <h2>Conclusion</h2>
  </br> 
  <p>Blogging is a journey that requires patience, creativity, and effort.   </br> 
  By following the tips in this guide, you can start a successful blog and grow it over time.</p>
  <p>Ready to start blogging? Check out our <a href="https://example.com/start-blogging" target="_blank" rel="noopener noreferrer">step-by-step guide</a> to get started today!</p>
`;

  return (
    <div className="bg-background    py-4">
      {/* Main Content */}
      <div className="w-full grid  grid-cols-12 gap-3">
        {/* Blog Content */}
        <div className="lg:col-span-9 col-span-12 bg-backgroundSecond shadow-lg rounded-lg p-6">
          <div className="flex items-center  text-sm mb-4">
            <span>Written by John Doe</span>
            <span className="mx-2">|</span>
            <span>Published on Nov 27, 2024</span>
          </div>
          {/* Content */}
          <div dangerouslySetInnerHTML={{ __html: blogContent }} />

        
        </div>

        {/* Sidebar */}
        <RelatedBox placeholders={placeholders}/> 
      </div>
    </div>
  );
};

export default Reading;
