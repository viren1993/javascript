🔁 React Lifecycle & Side Effects

- Mount → componentDidMount → useEffect(() => {}, [])
- Update → componentDidUpdate → useEffect(() => {}, [dep])
- Unmount → componentWillUnmount → useEffect(() => { return () => {}; }, [])