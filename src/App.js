import "./styles.css";

export default function App() {
  const fun = (value) => {
    var res = value.split(" ");
    if (res) {
      var arr = [["", ""]];
      console.log(res[0]);
      console.log(res[1]);
      for (let i = 0; i < res.length; i++) {
        const element = res[i];
        var n = element.length;
        for (let j = 0; j < n; j++) {
          var num = 0;
          const char = element.substr(num++, j);
          console.log(char);
          arr.push([]);
        }
      }
      console.log(arr);
    } else {
    }
    var res2 = value.substr(1, 4);
    console.log(value.indexOf(" "));
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox {fun("hello World")}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
