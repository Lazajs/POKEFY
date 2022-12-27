import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import Pokemon from '@/pages/pokemon'
import SearchProvider from '@/context/SearchProvider'
import NotFound from '@/pages/NotFound'

function App () {
  return (
    <Layout>
      <SearchProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:pokemon' element={<Pokemon />} />
          <Route path='/404' element={<NotFound />} />
        </Routes>
      </SearchProvider>
    </Layout>
  )
}

export default App
