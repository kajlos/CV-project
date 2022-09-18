import React, { useState } from 'react';
import Creator from './components/creator';
import Preview from './components/preview';
import Footer from './components/footer';
function App() {
  const [preview, setPreview] = useState(false);
  const [data, setData2] = useState({ general: {}, education: [], experience: [] });
  const handleClick = () => {
    setPreview(!preview);
  };
  const setData = data => {
    setData2(data);
  };

  return (
    <div className="app">
      <h1>CV Creator</h1>
      <button type="button" onClick={handleClick}>
        {preview ? 'Creator' : 'Preview'}
      </button>
      {preview ? <Preview data={data} /> : <Creator setData={setData} data={data} />}
      <Footer />
    </div>
  );
}

export default App;
