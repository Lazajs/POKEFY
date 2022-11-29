import Layout from '@/components/Layout'
import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'

function App () {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Layout>
  )
}

export default App
