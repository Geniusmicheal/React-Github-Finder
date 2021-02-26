import { Fragment } from 'react';
import User from './User';
import Search from './/Search';

const Home = () => {
   return (
      <Fragment>
         <Search/>
         <User/>
   </Fragment>
   )
}

export default Home;