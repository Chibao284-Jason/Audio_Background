import * as React from 'react';
import {Text, View, StyleSheet, AppState, BackHandler} from 'react-native';
import VideoComponent from '@components/VideoComponent';
import Video from 'react-native-video';
import {WebView} from 'react-native-webview';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface VideoScreenProps {}

const VideoScreen = (props: VideoScreenProps) => {
  const appState = React.useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = React.useState(
    appState.current,
  );
  const [canPlay, setCanPlay] = React.useState(true);

  React.useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!', canPlay);
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      if (
        appState.current === 'inactive' ||
        appState.current === 'background'
      ) {
        console.log('vaooo', canPlay);

        setCanPlay(true);
      }
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  //   const src = {
  //     html: ` <audio id="myVideo" pause="" src="https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_30mb.mp4" type="" controls title="" ></audio><video  width="500px" height="500px" playsinline="inline" controls pause=false >
  //       <source src="https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_30mb.mp4" type="video/mp4">
  //    </video>`,
  //   };
  //   const src = {
  //     html: `<button onclick="playVid()" type="button">Play Video</button>
  //     <button onclick="pauseVid()" type="button">Pause Video</button><br>
  //     <audio id="myVideo" pause="" src="https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_30mb.mp4" type="" controls title="" ></audio>
  //     <video id="myVideo" width="320" height="176">
  //       <source src="https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_30mb.mp4" type="video/mp4">
  //     </video>

  //     <script>
  //     var vid = document.getElementById("myVideo");

  //     function playVid() {
  //       vid.play();
  //       audio.play();
  //     }

  //     function pauseVid() {
  //       vid.pause();
  //       audio.pause();
  //     }
  //     </script> `,
  //   };
  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: 'https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_30mb.mp4',
        }} // Can be a URL or a local file.
        resizeMode={'cover'}
        style={{width: 300, height: 300}}
        controls={true}
        playWhenInactive={true}
        playInBackground={true}
        ignoreSilentSwitch="ignore"
        allowsExternalPlayback={true}
        shouldRasterizeIOS
      />
      {/* <WebView
        allowsFullscreenVideo={false}
        ignoreSilentHardwareSwitch={true}
        mediaPlaybackRequiresUserAction={true}
        style={{marginTop: 20, width: 320, height: 230}}
        source={{uri: 'https://rs2rw.csb.app/'}}
        mixedContentMode={'never'}
      /> */}
    </View>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
});
