import './App.css';
import Header from './components/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([])


  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get("https://testnets-api.opensea.io/assets?asset_contract_address=0x7F4d059639b3AD8Cc70393Aa82A41a0C0dA45b5c&order_direction=asc"
      )
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets)
    }

    return getMyNfts();
  }, [])

  return (
    <div className="App">
      <Header />
      <Main />
      

      <PunkList punkListData={punkListData} />
    </div>
  );
}

export default App;
