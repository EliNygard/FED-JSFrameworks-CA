import './App.css'
import { Button } from '@/components/ui/button'

function App() {

  return (
    <>
    <div>
      <h1>Header</h1>
    </div>
    <div className='bg-amber-200'>
      <h2>Main content</h2>
      <div className="">
      <Button>Click me</Button>
    </div>
    </div>
    <div>
      <h3>Footer</h3>
    </div>
    </>
  )
}

export default App
