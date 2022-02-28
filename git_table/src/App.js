import { Button, Table, Tag, Space } from 'antd';
import { useState } from 'react';
import 'antd/dist/antd.css';
import { getRepos, getStars } from './controllers/apiHelper';
import ColumnGroup from 'antd/lib/table/ColumnGroup';

function App() {
  const [starSource, setStarSource] = useState([])
  const [dataSource, setDataSource] = useState([])
  const [user, setUser] = useState("")
  const [repos, setRepos] = useState(false)
  const [data, setData] = useState([])
  const [stars, setStars] = useState([])
  const [flag, setFlag] = useState(false)
  //const [dataSource, setDataSource] = []
  const handleChange = (e) => {
    setUser(e.target.value)
  }
  const handleClick = async (e) => {

    setUser("")
    console.log(user)
    const repos = await getRepos(user);
    const s = await getStars(user)
    setStars(s)
    setRepos(repos)

    for (let i of repos)
      data.push(i.name)

    for (let i of s)
      stars.push(i.name)


    for (let i = 0; i < data.length; i++) {
      let x = dataSource
      x.push({ 'no': i, 'name': data[i], 'key': i + '' })
      setDataSource(x);
      console.log(dataSource)
    }

    for (let i = 0; i < s.length; i++) {
      let x = starSource
      x.push({ 'no': i, 'name': data[i], 'key': i + '' })
      setStarSource(x);
      console.log(starSource)
    }


    setFlag(true)
  }
  const columns = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
    },

    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },

  ]
  var i = 0

  return (
    <div>

      <form>
        <input type="text" onChange={handleChange} placeholder="enter the github username" value={user} />
        <Button type="primary" onClick={handleClick}>Get Repositories</Button>

      </form>

      {flag && <h1> Repositories</h1> && <Table dataSource={dataSource} columns={columns} />}

      {flag && <h1>starred Repositories</h1> && <Table dataSource={starSource} columns={columns} />}

    </div>
  );

}
export default App;

