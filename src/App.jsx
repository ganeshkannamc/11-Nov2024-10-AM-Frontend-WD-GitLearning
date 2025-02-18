import {
  useCallback,
  useEffect,
  useId,
  useInsertionEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
} from "react";
import UseCallback from "./hooks/UseCallback";
import UseReducer from "./hooks/UseReducer";

function App() {
  let [userText, setUserText] = useState("");
  let [count, setCount] = useState(0);
  let [show, setShow] = useState(true);
  let [load, setLoad] = useState(false);

  let [users, setUsers] = useState([]);

  let [isPending, startTransition] = useTransition();

  useEffect(() => {
    fetchUser()
  }, []);

  async function fetchUser() {
    try {
      // setLoad(true);
      let respon = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await respon.json();

      setTimeout(() => {
        startTransition(() => {
          setUsers(data);
        });
      }, 2000);
    } catch (err) {
      console.log(err);
    } finally {
      // setTimeout(() => {
      //   setLoad(false);
      // }, 2000);
      // setLoad(false);
    }
  }

  // let myRef = useRef();
  // let myId = useId();
  // let myI2d = useId();

  // useEffect(() => {console.log('useEffect')}, []);
  // useLayoutEffect(() => {console.log('useLayoutEffect')}, []);
  // useInsertionEffect(() => {console.log('useInsertionEffect')}, []);

  // let manageCount = useCallback(() => {
  //   console.log("manageCount");
  //   setCount(count + 1);
  //   console.log(myRef.name = "ganesh");
  //   myRef.current.focus();
  //   return 'abc';
  // }, [count]);

  // let num = useMemo(() => expensiveCalculation(count), []);

  return (
    <div>
      {console.log(isPending)}
      {isPending
        ? "Loading..."
        : users.map((user) => (
            <div key={user.id}>
              <h1>{user.name}</h1>
              <h3>{user.email}</h3>
            </div>
          ))}
      {/* <UseReducer /> */}
      {/* <h1 > Hello {myId}</h1>
      <button onClick={() => setShow(!show)}>Toggle - {show.toString()}</button>
      {console.log("jsx")} */}
      {/* <h1 >{myI2d}</h1> */}
      {/* <input type="text" name="ganesh" ref={myRef} />
      Hello - Am app - {num}
      <br />
      <br />
      <input
        value={userText}
        onChange={(event) => setUserText(event.target.value)}
      />
      <UseCallback value={userText} manageCount={manageCount} count={count} /> */}
    </div>
  );
}

export default App;

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  // for (let i = 0; i < 1000000000; i++) {
  //   num += 1;
  // }
  return num;
};
