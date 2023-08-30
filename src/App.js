import ImageList from './components/ImageList/imageList';
import Header from './layouts/Header/header';
import './styles/reset.scss';
import ExampleForm from './forms/exampleForm';

const App = () => {  
  return (
    <>
    <div className='app'>
      <Header name='Test' />
      <ImageList />
      <ExampleForm />
    </div>
    </>
  );
}

export default App;
