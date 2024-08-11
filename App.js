import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Octicons from "@expo/vector-icons/Octicons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function App() {
  return <InstagramClone />;
}

const FEEDS_DATA = [
  {
    username: "Levi Ackerman",
    imageUrl:
      "https://i.pinimg.com/736x/e8/02/e7/e802e799104b921a6b6520b01032abd4.jpg",
    hasActiveStory: false,
    feed: {
      imageUrl:
        "https://images.unsplash.com/photo-1533621834623-d0b25d0b14e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFjYXRpb24lMjBtYW58ZW58MHx8MHx8fDA%3D",
      totalLikes: 10,
      friendLikes: [
        {
          name: "Dova",
          imageUrl:
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64d92a54-b206-481d-814e-de021ac31156/dfi2aq6-7d83ac2a-3da8-40da-87fa-ff3cb91c812d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY0ZDkyYTU0LWIyMDYtNDgxZC04MTRlLWRlMDIxYWMzMTE1NlwvZGZpMmFxNi03ZDgzYWMyYS0zZGE4LTQwZGEtODdmYS1mZjNjYjkxYzgxMmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sUgsOyBGsFYDbc1QEV6aU-gG8h03TA5tJXOX5crnydw",
        },
        {
          name: "Alan Walker",
          imageUrl:
            "https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=4:3",
        },
        {
          name: "Oki",
          imageUrl:
            "https://play-lh.googleusercontent.com/KnFMQzTkrsWoyFZPDovbEGxYbrJF_37APuzIPhYCT_dAFRBKCu57sDiezvQBxoSd5s4=w240-h480-rw",
        },
      ],
      caption:
        "Berakit rakit ke hulu berenang renang ketepian, bersakit sakit dahulu bersenang senang dalam kesepian. Kerja keras, istirahat dan tidur yang cukup, dan banyak berdoa dan bersyukur.",
      totalComments: 5,
      postDate: Date.now() - 60 * 60 * 24 * 1000 * 199,
    },
  },
  {
    username: "Alan Walker",
    imageUrl:
      "https://i.pinimg.com/736x/e8/02/e7/e802e799104b921a6b6520b01032abd4.jpg",
    hasActiveStory: false,
    feed: {
      imageUrl:
        "https://images.unsplash.com/photo-1533621834623-d0b25d0b14e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFjYXRpb24lMjBtYW58ZW58MHx8MHx8fDA%3D",
      totalLikes: 10,
      friendLikes: [
        {
          name: "Dova",
          imageUrl:
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64d92a54-b206-481d-814e-de021ac31156/dfi2aq6-7d83ac2a-3da8-40da-87fa-ff3cb91c812d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY0ZDkyYTU0LWIyMDYtNDgxZC04MTRlLWRlMDIxYWMzMTE1NlwvZGZpMmFxNi03ZDgzYWMyYS0zZGE4LTQwZGEtODdmYS1mZjNjYjkxYzgxMmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sUgsOyBGsFYDbc1QEV6aU-gG8h03TA5tJXOX5crnydw",
        },
        {
          name: "Levi",
          imageUrl:
            "https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=4:3",
        },
        {
          name: "Oki",
          imageUrl:
            "https://play-lh.googleusercontent.com/KnFMQzTkrsWoyFZPDovbEGxYbrJF_37APuzIPhYCT_dAFRBKCu57sDiezvQBxoSd5s4=w240-h480-rw",
        },
      ],
      caption:
        "Berakit rakit ke hulu berenang renang ketepian, bersakit sakit dahulu bersenang senang dalam kesepian. Kerja keras, istirahat dan tidur yang cukup, dan banyak berdoa dan bersyukur.",
      totalComments: 5,
      postDate: Date.now() - 60 * 60 * 24 * 1000 * 199,
    },
  },
];

const InstagramClone = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <Text style={styles.logo}>Instagram</Text>
          <FontAwesome6 name="chevron-down" size={12} color="black" />
        </View>

        <View style={styles.headerIcons}>
          <MaterialCommunityIcons
            name="heart-outline"
            style={styles.icon}
            size={24}
            color="black"
          />
          <Fontisto
            name="messenger"
            style={styles.icon}
            size={24}
            color="black"
          />
        </View>
      </View>

          <ScrollView>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.storiesContainer}
      >
        <View style={styles.story}>
          <View>
            <LinearGradient
              colors={["#f09433", "#e6683c", "#dc2743", "#cc2366", "#bc1888"]}
              style={styles.storyGradient}
            >
              <Image
                source={{ uri: FEEDS_DATA[0].imageUrl }}
                style={styles.storyImage}
              />
            </LinearGradient>
            <FontAwesome
              name="circle"
              size={26}
              color="black"
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                color: "white",
              }}
            />
            <MaterialIcons
              name="add-circle"
              size={24}
              color="black"
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                color: "#rgb(6,188,238)",
              }}
            />
          </View>
          <Text style={styles.storyText}>Your Story</Text>
        </View>
        {FEEDS_DATA.map((story, index) => (
          <View key={index} style={styles.story}>
            <LinearGradient
              colors={["#f09433", "#e6683c", "#dc2743", "#cc2366", "#bc1888"]}
              style={styles.storyGradient}
            >
              <Image
                source={{ uri: story.imageUrl }}
                style={styles.storyImage}
              />
            </LinearGradient>
            <Text style={styles.storyText}>{story.username}</Text>
          </View>
        ))}
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          padding: 10,
        }}
      >

        <FontAwesome5 name="check-circle" size={24} colors={["#f09433", "#e6683c", "#dc2743", "#cc2366", "#bc1888"]} />

        <Text>
          You've seen all new posts from the past 3 days from accounts you
          follow.
        </Text>
      </View>

   
      <View style={styles.suggestedContainer}>
        <Text style={styles.suggestedText}>Suggested for you</Text>
        <Text style={styles.olderPostsText}>Older posts</Text>
      </View>


      <View style={styles.feedItem}>
        <View style={styles.feedHeader}>
          <View style={styles.feedProfileContainer}>
            <LinearGradient
              colors={["#f09433", "#e6683c", "#dc2743", "#cc2366", "#bc1888"]}
              style={styles.feedProfileImageGradient}
            >
              <Image
                source={{ uri: FEEDS_DATA[0].imageUrl }}
                style={styles.feedProfileImage}
              />
            </LinearGradient>
            <View>
              <Text style={styles.feedUser}>
                {FEEDS_DATA[0].username}{" "}
                <Octicons
                  name="check-circle-fill"
                  size={12}
                  color="#rgb(6,188,238)"
                />
              </Text>
              <Text>Suggested for you</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.followText}>Follow</Text>
            <Feather name="more-vertical" size={24} color="black" />
          </View>
        </View>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1533621834623-d0b25d0b14e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFjYXRpb24lMjBtYW58ZW58MHx8MHx8fDA%3D",
          }}
          style={styles.feedImage}
        />
        <View style={{ flexDirection: "row" }}>
          <MaterialCommunityIcons
            name="heart-outline"
            size={24}
            color="black"
          />
          <FontAwesome
            name="comment-o"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Ionicons
            name="paper-plane-outline"
            size={24}
            color="black"
            style={styles.icon}
          />
        </View>
        <Text style={styles.feedCaption}>{FEEDS_DATA[0].feed.caption}</Text>
      </View>

      </ScrollView>


      <View style={styles.bottomNav}>
        <MaterialCommunityIcons name="home-variant" size={24} color="black" />
        <Octicons name="search" size={24} color="black" />
        <Octicons name="diff-added" size={24} color="black" />
        <Octicons name="video" size={24} color="black" />
        <Image
          source={{ uri: FEEDS_DATA[0].imageUrl }}
          style={styles.bottomProfileIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  logo: {
    fontSize: 24,
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 20,
  },
  storiesContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  story: {
    alignItems: "center",
    marginRight: 15,
    paddingLeft: 10,
  },
  storyGradient: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#fff",
  },
  storyText: {
    marginTop: 5,
    fontSize: 12,
  },
  suggestedContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  suggestedText: {
    fontWeight: "bold",
  },
  olderPostsText: {
    color: "#007AFF",
  },
  feedItem: {
    padding: 10,
  },
  feedHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  feedProfileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  feedProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },
  feedProfileImageGradient: {
    width: 42,
    height: 42,
    borderRadius: 20,
    justifyContent: "center",

    marginRight: 10,
  },

  feedUser: {
    fontWeight: "bold",
  },
  followText: {
    color: "black",
    backgroundColor: "#F9F9F9",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
  },
  feedImage: {
    width: "100%",

    objectFit: "cover",
    aspectRatio: 1,
    marginBottom: 10,
  },
  feedCaption: {
    fontSize: 14,
    paddingTop: 5,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingHorizontal: 30,
    borderTopWidth: 1,
    paddingBottom: 20,
    borderColor: "#ddd",
  },
  bottomIcon: {
    width: 28,
    height: 28,
  },
  bottomProfileIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
});
