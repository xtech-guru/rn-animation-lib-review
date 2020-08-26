# React Native Animations and Transitions

This project created to helps mobile developers using animations and transitions with react native by showing usage examples, rendering time and benchmarks.

## How to run project?

This project is a yarn workspaces (mono-repository), so to run a one of modules only you need to execute these two commands in `Terminal`:

`yarn worksapce [module-name] start` --> to start react native package manager.

`yarn worksapce [module-name] android` --> to run the project in your device/emulator.

### React native animatable

It is a library that provides animations and transitions for react native apps.

#### Installation

We just need to add `react-native-animatable` package to our project.

#### Usage

This library provides three animatable class components `View`, `Text` and `Image`, they can be used like below, e.g:

```
<Animatable.View animation="fadeIn">
    <Text>Fade me in</Text>
</Animatable.View>
```

```
<Animatable.Image animation="rotate" source={{ uri: imageUri }}" style={{ width: 480, height: 480}}/>
```

```
<Animatable.Text animation="zoomInUp" iterationCount="infinite">Zoom me up, Scotty</Animatable.Text>
```

You can add this property `iterationCount="infinite"` to make animation loop for the animated component.

#### ScreenShots

![animatable-attention](https://cloud.githubusercontent.com/assets/378279/10590307/ef73b1ba-767d-11e5-8fb9-9779d3a53a50.gif)

- `bounce`
- `flash`
- `jello`
- `pulse`
- `rotate`
- `rubberBand`
- `shake`
- `swing`
- `tada`
- `wobble`

##### Bouncing Entrances

![animatable-bouncein](https://cloud.githubusercontent.com/assets/378279/10590306/ef572bbc-767d-11e5-8440-8e61d401537a.gif)

- `bounceIn`
- `bounceInDown`
- `bounceInUp`
- `bounceInLeft`
- `bounceInRight`

##### Bouncing Exits

![animatable-bounceout](https://cloud.githubusercontent.com/assets/378279/10590305/ef56e4cc-767d-11e5-9562-6cd3210faf34.gif)

- `bounceOut`
- `bounceOutDown`
- `bounceOutUp`
- `bounceOutLeft`
- `bounceOutRight`

##### Fading Entrances

![animatable-fadein](https://cloud.githubusercontent.com/assets/378279/10590304/ef4f09b4-767d-11e5-9a43-06e97e8ee2c1.gif)

- `fadeIn`
- `fadeInDown`
- `fadeInDownBig`
- `fadeInUp`
- `fadeInUpBig`
- `fadeInLeft`
- `fadeInLeftBig`
- `fadeInRight`
- `fadeInRightBig`

##### Fading Exits

![animatable-fadeout](https://cloud.githubusercontent.com/assets/378279/10590303/ef3e9598-767d-11e5-83bc-bd48d6017131.gif)

- `fadeOut`
- `fadeOutDown`
- `fadeOutDownBig`
- `fadeOutUp`
- `fadeOutUpBig`
- `fadeOutLeft`
- `fadeOutLeftBig`
- `fadeOutRight`
- `fadeOutRightBig`

##### Flippers

![animatable-flip](https://cloud.githubusercontent.com/assets/378279/10590296/ef3076ca-767d-11e5-9f62-6b9c696dad51.gif)

- `flipInX`
- `flipInY`
- `flipOutX`
- `flipOutY`

##### Lightspeed

![animatable-lightspeed](https://cloud.githubusercontent.com/assets/378279/10590301/ef374c8e-767d-11e5-83ad-b249d2731f43.gif)

- `lightSpeedIn`
- `lightSpeedOut`

##### Sliding Entrances

![animatable-slidein](https://cloud.githubusercontent.com/assets/378279/10590300/ef36dfe2-767d-11e5-932b-1cccce78087b.gif)

- `slideInDown`
- `slideInUp`
- `slideInLeft`
- `slideInRight`

##### Sliding Exits

![animatable-slideout](https://cloud.githubusercontent.com/assets/378279/10590299/ef35a3ca-767d-11e5-94e0-441fd49b6444.gif)

- `slideOutDown`
- `slideOutUp`
- `slideOutLeft`
- `slideOutRight`

##### Zooming Entrances

![animatable-zoomin](https://cloud.githubusercontent.com/assets/378279/10590302/ef37d438-767d-11e5-8480-a212e21c2192.gif)

- `zoomIn`
- `zoomInDown`
- `zoomInUp`
- `zoomInLeft`
- `zoomInRight`

##### Zooming Exits

![animatable-zoomout](https://cloud.githubusercontent.com/assets/378279/10590298/ef33fa52-767d-11e5-80fe-6b8dbb5e53d0.gif)

- `zoomOut`
- `zoomOutDown`
- `zoomOutUp`
- `zoomOutLeft`
- `zoomOutRight`

#### Benchmarks

A list of render time durations for different animations.

| Animations  | Rendering duration |
| :---------: | :----------------: |
|    Fade     |       90 ms        |
|    Slide    |       99 ms        |
|    Zoom     |       105 ms       |
|    Flip     |       97 ms        |
|   Bounce    |       65 ms        |
|    Flash    |       86 ms        |
|    Jello    |       116 ms       |
|    Pulse    |       98 ms        |
|   Rotate    |       72 ms        |
| Rubber Band |       92 ms        |
|    Shake    |       102 ms       |
|    Swing    |       91 ms        |
|    Tada     |       108 ms       |
|   Wobble    |       107 ms       |

### React Native Pose

#### Installation

Only what you need is to add this package `react-native-pose` to your project.

#### Usage

#### Screenshots

![animatable-zoomin](https://raw.githubusercontent.com/xtech-guru/rn-animation-lib-review/master/packages/reactNativePose/assets/fade.gif)

![animatable-zoomin](https://raw.githubusercontent.com/xtech-guru/rn-animation-lib-review/master/packages/reactNativePose/assets/zoom.gif)

![animatable-zoomin](https://raw.githubusercontent.com/xtech-guru/rn-animation-lib-review/master/packages/reactNativePose/assets/bounce.gif)

![animatable-zoomin](https://raw.githubusercontent.com/xtech-guru/rn-animation-lib-review/master/packages/reactNativePose/assets/rotate.gif)

![animatable-zoomin](https://raw.githubusercontent.com/xtech-guru/rn-animation-lib-review/master/packages/reactNativePose/assets/scaleX.gif)

![animatable-zoomin](https://raw.githubusercontent.com/xtech-guru/rn-animation-lib-review/master/packages/reactNativePose/assets/scaleY.gif)

#### Benchmarks

### React Native Fluid Transition

#### Installation

#### Usage

#### Screenshots
