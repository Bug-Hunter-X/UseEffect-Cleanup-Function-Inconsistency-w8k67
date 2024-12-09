```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    console.log('Component mounted');
    return () => {
       setIsMounted(false);
      console.log('Component unmounting');
    };
  }, []);

  useEffect(() => {
    if(isMounted){
      console.log('Component is mounted')
    }
  }, [count])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```