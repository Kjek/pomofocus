import useTimer from '@hook/useTimer'

function App() {
  const { toggleTimer, formatedTime } = useTimer()

  return (
    <>
      <div className='w-screen'>
        <div className='m-auto flex w-1/2 flex-col gap-2'>
          <span className='w-full text-center text-gray-800 dark:text-gray-300'>
            {formatedTime}
          </span>
          <input
            className='w-full cursor-pointer rounded-lg border-2 border-gray-300 text-gray-800 hover:bg-gray-200 active:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white dark:active:bg-gray-600'
            type='button'
            value='Play/Pause'
            onClick={toggleTimer}
          />
        </div>
      </div>
    </>
  )
}

export default App
