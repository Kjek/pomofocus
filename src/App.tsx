import useTimer from '@hook/useTimer';

function App() {
  const { toggleTimer, formatedTime } = useTimer();

  return (
    <>
      <div className="w-screen">
        <div className="flex flex-col w-1/2 gap-2 m-auto">
          <span className="w-full text-center dark:text-gray-300">
            {formatedTime}
          </span>
          <input
            className="w-full border-2 active:bg-gray-100 border-gray-300 rounded-lg dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 dark:active:bg-gray-600 dark:hover:text-white hover:bg-gray-200 cursor-pointer"
            type="button"
            value="Play/Pause"
            onClick={toggleTimer}
          />
        </div>
      </div>
    </>
  );
}

export default App;
