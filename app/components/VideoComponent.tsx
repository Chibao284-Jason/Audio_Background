import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Video from 'react-native-video-controls';
interface VideoComponentProps {}

const VideoComponent = (props: VideoComponentProps) => {
  return (
    <View style={styles.container}>
      {/* <Video
        source={{
          uri: 'https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_30mb.mp4',
        }} // Can be a URL or a local file.
        style={{width: 300, height: 300}}
        controls
        playWhenInactive={true}
        playInBackground={true}
        ignoreSilentSwitch="ignore"
      /> */}
      {/* <Video
        source={{
          uri: 'https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_30mb.mp4',
        }} // Can be a URL or a local file.
        rate={1.0}
        volume={1.0}
        muted={false}
        resizeMode={'cover'}
        repeat
        style={{width: 300, height: 300}}
        mixWithOthers="mix"
      /> */}
    </View>
  );
};

export default VideoComponent;

const styles = StyleSheet.create({
  container: {flex: 1},
});
