import useTimer from '@hook/useTimer';

function App() {
  const { toggleTimer, formatedTime } = useTimer();

  return (
    <>
      <div className="w-screen">
        <div className="flex flex-col w-1/2 gap-2 m-auto">
          <span className="w-full text-center">{formatedTime}</span>
          <input
            className="w-full border-2 border-black rounded"
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
