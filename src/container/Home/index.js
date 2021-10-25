import {
  ThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';
import {
  Grid,
  Typography
} from '@material-ui/core';
import './css/index.css';

function Home() {
  return (
    <div>
      <Grid className="container" container>
        <Grid item>
          <Typography className="quick_links" variant="h4" >
            Quick Links
          </Typography>
          <ul>
            <li>
              <a href="#react_native">What is React Native?</a>
            </li>
            <li>
              <a href="#expo_vs_cli">Expo Vs React Native CLI</a>
            </li>
            <li>
              <a href="#flutter_vs_react_native">Flutter Vs React Native</a>
            </li>
          </ul>
        </Grid>
        <Grid item>
          <Typography className="sub_heading" id="react_native" variant="h5" >
            What is React Native?
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" >
            React Native is an open-source cross-platform mobile development framework created by Facebook which was introduced in March, 2015. It differs from other methods of mobile development in that React Native is based on React JS, Facebook's JavaScript library for creating UIs for web apps. Developers write code as they would for a web app in React and when the build is created, React Native transforms the code into the platform's native language ( Java for Android & Objective-C for iOS ) so the app looks and feels truly native as React Native uses UI components for the mobile apps instead of web views like other methods. Also, unlike other methods, using React Native allows the code to be shared for production of both Android and iOS versions of the app saving a lot of time and effort.
          </Typography>
        </Grid>
        <Grid item>
          <Typography className="sub_heading" id="expo_vs_cli" variant="h5" >
            Expo Vs React Native CLI
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" >
            There are two ways to create a React Native app: (i) Expo CLI and (ii) React Native CLI. Both have their advantages and drawbacks as listed in the table below:
          </Typography>
          <table className="table" >
            <tr>
              <th>Expo</th>
              <th>React Native CLI</th>
            </tr>
            <tr>
              <td>Expo CLI is the fastest way to create a React Native app as it takes minutes to setup and start writing your mobile app.</td>
              <td>React Native CLI takes a lot of time to setup and requires several external packages (Node and Openjdk8) and softwares (Android Studio) to be able to create your mobile app.</td>
            </tr>
            <tr>
              <td>Expo CLI manages the code for the app on its own so its not possible to track errors which leads to poor development experience.</td>
              <td>It is fully possible to track which part of yor app has ran into an error as you have full access to your code.</td>
            </tr>
            <tr>
              <td>Managing changes to your app during development is time consuming as Expo recreates a build for the app every time you change something.</td>
              <td>React Native CLI is as fast as React JS meaning as soon a change is made, it is immediately visible without ever reloading or rebuilding the app.</td>
            </tr>
            <tr>
              <td>Expo apps tend to run into errors as standalone apps even when there is no error during the development process.</td>
              <td>On the other hand, React Native CLI has no such issues and is equipped with excellent debugging tools to enhance the development experience.</td>
            </tr>
            <tr>
              <td>Expo CLI has lost its popularity dramatically and is rarely used to create production ready mobile apps.</td>
              <td>React Native CLI is in high demand and the go to option for creating mobile apps because of the many improvements that have been done to it.</td>
            </tr>
          </table>
          <Typography variant="h6" >
            By reading the table above, it is clear that if you are not new to mobile development, then the best choice is to use React Native CLI to get the most value for your time and effort. 
          </Typography>
        </Grid>
        <Grid item>
          <Typography className="sub_heading" id="flutter_vs_react_native" variant="h5" >
            Flutter Vs React Native
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" >
            Flutter is a mobile development SDK created by Google in December, 2018. It uses a single codebase to create apps for iOS, Android, Web and Linux, meaning its a cross-platform development framework. Compared to React Native, it is relatively young but Google has improved Flutter a surprisingly rapid pace and going by the stars on Github, it has far surpassed React Native in popularity. The following table provides a thorough comparison of both technologies:
          </Typography>
          <table className="table" >
            <tr>
              <th>Flutter</th>
              <th>React Native</th>
            </tr>
            <tr>
              <td>Flutter is an open-source cross-platform mobile development framework by Google that makes use of attractive widgets to create native apps be it for the Web, iOS or Android.</td>
              <td>React Native uses React's components to create native apps for iOS and Android but implements mobile view components so the apps look like any other mobile app.</td>
            </tr>
            <tr>
              <td>
                Flutter is based on a "Dart" , a new object oriented programming language which is similar to Java and C# so existing mobile developers find it easy to move to Flutter.
              </td>
              <td>
                React Native is almost completely similiar to React JS, Facebook's JavaScript library for creating UIs for web apps which means that for web developers it's the same as writing web apps without having to learn any additional skills.
              </td>
            </tr>
            <tr>
              <td>Flutter can be used for creating web apps like PWAs, SPAs and for existing mobile applications using the same codebase.</td>
              <td>React Native too can be used to create web apps but it requires the help of external libraries so React JS is still the preferred choice of web developers.</td>
            </tr>
            <tr>
              <td>Flutter has two sets of widgets: one uses Google's Material Design and the other, Cupertino, imitates Apple's UI. So Flutter apps look right at home on any platform.</td>
              <td>React Native uses native UI components so that a button in an Android app looks the same as other buttons in Android and the same goes for iOS but during updates, there lies a small chance that the UI will be broken and have to be made stable again.</td>
            </tr>
            <tr>
              <td>Flutter's widget based development requires no platform-specific stabilization so apps are market ready pretty quickly compared to other mobile development technologies.</td>
              <td>
                React Native uses native components that can require platform-specific stabilization which means development process may take longer as compared to Flutter.
              </td>
            </tr>
          </table>
          <Typography variant="h6" >
            Reading the table makes it clear that although Flutter only recently emerged into the scene of mobile development, the team behind it has put tremendous time and effort into improving it so it goes head to head with React Native and beyond. But still there are specific scenarios that may require one technology to be chosen over the other but both Flutter and React Native are the leading solutions for creating native mobile apps.
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home;