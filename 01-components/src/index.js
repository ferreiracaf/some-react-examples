import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail
          author='Lucas'
          date='Today at 00:21 PM'
          content='Conteudo do Lucas'
          image={faker.image.image()}
        ></CommentDetail>
      </ApprovalCard>
      <CommentDetail
        author='Carlos'
        date='Today at 18:21 PM'
        content='Conteudo dessa joça'
        image={faker.image.image()}
      ></CommentDetail>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
