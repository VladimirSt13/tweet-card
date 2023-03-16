import { Card } from "./components/Card/Card";
import { Box } from "./components/commons/Box";

function App() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <h1>Hello</h1>
      <Card />
    </Box>
  );
}

export default App;
