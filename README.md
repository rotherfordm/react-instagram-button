# Instagram follow button for React

A component for showing a follow button and the number of followers.

![](https://i.imgur.com/40TvBYx.png)

Install the package

```
npm install --save react-instagram-button
```

Example

```
import React,  {  Component  }  from  "react";
import InstagramButton from  "react-instagram-button";

class  App  extends  Component  {
	render()  {
		return  (
			<div style={{ display: "flex", justifyContent: "center"}}>
				<InstagramButton username={"rotherford_"} />
			</div>
		);
	}
}

export  default App;
```

## Built With

- [FortAwesome](https://github.com/FortAwesome/Font-Awesome)
- [axios](https://github.com/axios/axios)
- [webpack](https://github.com/webpack/webpack)

## Contributing

Please read [CONTRIBUTING.md](https://github.com/HeatzRM/react-instagram-button/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/HeatzRM/react-instagram-button/blob/master/LICENSE) file for details
