import { useState, useContext } from 'react';
import GithubContext from "./../context/github/githubContext";
import { AlertContext } from '../context/alert/AlertContext';

const Search = () => {
   const githubContext_ = useContext(GithubContext);
   const {users, searchUsers, clearUsers  } = githubContext_;

   const alertContext_ = useContext(AlertContext);
   const {showAlert } = alertContext_;

   const [text, setText] = useState('');
   const onSubmit_ = e => {
      e.preventDefault();
      if(text==='') showAlert('Please enter something', 'light');
      else{
         searchUsers(text);
         setText('');
      }
   }

   const onChange_ = e => setText(e.target.value);
   // const onChange_ = e => setText({[e.target.name]:e.target.value}); for multi input field
   return (
      <div>
         <form className="form" onSubmit={onSubmit_}> 
            <input type="text" name="text" placeholder="Search Users..." value={text} onChange={onChange_} />
            <input type="submit" value="Search" className="btn btn-dark btn-block" />
         </form>
         {users.length >0 && (<button className="btn btn-light btn-block" onClick={clearUsers}> Clear</button>)}
      </div>
   );
};


export default Search;