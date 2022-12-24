import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import Pokemon from '@/pages/pokemon'

function App () {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:pokemon' element={<Pokemon />} />
      </Routes>
    </Layout>
  )
}

export default App
