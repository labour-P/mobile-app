import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  RefreshControl,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import FloatingBtn from "../components/general/Floatingbtn";
import { Ionicons } from "@expo/vector-icons";
import BodyTextLight from "../components/general/BodyTextLight";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../constants/color";
import { useDispatch, useSelector } from "react-redux";
import { getAdminPost } from "../redux/actions/admin";
import AdminPostList from "../components/post/AdminPostList";
import { generateId } from "../utils/generateRandomString";
import ButtonDiv from "../components/general/ButtonDiv";
import FilterModal from "../components/general/FilterModal";

const Notifications = ({ navigation }) => {
  const [error, setError] = useState({});
  const [posts, setPosts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const { adminPost } = useSelector((state) => state.admin);
  const { user } = useSelector((state) => state.auth);

  // console.log(adminPost);
  const dispatch = useDispatch();

  const fetchPosts = async () => {
    try {
      await dispatch(getAdminPost());
    } catch (error) {
      setError((errors) => ({ ...errors, res: error.message }));
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState([]);

  const handleModal = () => {
    setIsModalOpen(true);
  };

  const adminposts = [
    // {
    //   id: 1,
    //   type: "news",
    //   heading: "Precise Onward Unemployemnt Register",
    //   message:
    //     '"The dissatisfied individuals in any society are usually those who feel their potential is underutilized or outrightly unrecognized. One time tested way to engage and recognize the potentials of every individual in any society is employment. I agree completely with one of my scholar friends who says "employment is one of the most equitable means of income distribution." We must take the gathering of data for the unemployed and the underemployed in any society very seriously. -Peter Obi.',
    //   img: require("./../assets/img/ObiDatti.png"),
    //   date: "12th oct 2022",
    //   location: "FCT-Bwari-Kubwa",
    // },
    // {
    //   id: 2,
    //   type: "Rally",
    //   heading: "Nassarawa Rally",
    //   message:
    //     '"The dissatisfied individuals in any society are usually those who feel their potential is underutilized or outrightly unrecognized. One time tested way to engage and recognize the potentials of every individual in any society is employment. I agree completely with one of my scholar friends who says "employment is one of the most equitable means of income distribution." We must take the gathering of data for the unemployed and the underemployed in any society very seriously. -Peter Obi.',
    //   img: require("./../assets/img/ObiDatti.png"),
    //   date: "12th oct 2022",
    //   location: "Abia-Aba North-Eziama",
    // },
  ];

  useEffect(() => {
    const filteredPosts = adminposts.filter((post) => {
      const location =
        post.location.split("-")[0] +
        "-" +
        post.location.split("-")[1] +
        "-" +
        post.location.split("-")[2];

      const selectedWard =
        user.state.trim() + "-" + user.lga.trim() + "-" + user.ward.trim();

      return location.toLowerCase().trim() === selectedWard.toLowerCase();
    });

    setPosts(filteredPosts);
    const state = user.state;
    const lga = user.lga;
    const ward = user.ward;
    setCurrentLocation([state, lga, ward]);
  }, []);

  const handleRefresh = async () => {
    setRefreshing(true);
    fetchPosts();
    setRefreshing(false);
  };

  if (!posts.length) {
    return (
      <View style={styles.div}>
        <View style={styles.noPostView}>
          {isModalOpen && (
            <FilterModal
              setPosts={setPosts}
              posts={adminposts}
              modalVisible={isModalOpen}
              setModalVisible={setIsModalOpen}
              setCurrentLocation={setCurrentLocation}
            />
          )}
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={handleRefresh}
              />
            }
            style={{ width: "100%" }}
          >
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingHorizontal: 10,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  {currentLocation[0] !== null && (
                    <BodyTextLight style={{ fontSize: 14 }}>
                      {currentLocation[0]}
                    </BodyTextLight>
                  )}
                  {currentLocation[1] !== null && (
                    <BodyTextLight style={{ fontSize: 14 }}>
                      {">"} {currentLocation[1]}
                    </BodyTextLight>
                  )}
                  {currentLocation[2] !== null && (
                    <BodyTextLight style={{ fontSize: 14 }}>
                      {">"} {currentLocation[2]}
                    </BodyTextLight>
                  )}
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#fff",
                    borderWidth: 1,
                    borderColor: colors.primaryBg,
                    borderRadius: 10,
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    marginVertical: 10,
                  }}
                  onPress={() => setIsModalOpen(true)}
                >
                  <BodyTextLight style={{ color: colors.primaryBg }}>
                    Filter
                  </BodyTextLight>
                </TouchableOpacity>
              </View>
              {posts.map((post) => (
                <AdminPostList
                  navigation={navigation}
                  key={generateId()}
                  post={post}
                />
              ))}
            </View>
            <BodyTextLight style={{ marginTop: 100, textAlign: "center" }}>
              No Post under this location
            </BodyTextLight>
          </ScrollView>
          <FloatingBtn navigation={navigation} />
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.div}>
      {isModalOpen && (
        <FilterModal
          setPosts={setPosts}
          posts={adminposts}
          modalVisible={isModalOpen}
          setModalVisible={setIsModalOpen}
          setCurrentLocation={setCurrentLocation}
        />
      )}
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        style={{ width: "100%" }}
      >
        <View style={styles.view}>
          <View style={{ paddingHorizontal: 5 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 10,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                {currentLocation[0] !== null && (
                  <BodyTextLight style={{ fontSize: 14 }}>
                    {currentLocation[0]}
                  </BodyTextLight>
                )}
                {currentLocation[1] !== null && (
                  <BodyTextLight style={{ fontSize: 14 }}>
                    {">"} {currentLocation[1]}
                  </BodyTextLight>
                )}
                {currentLocation[2] !== null && (
                  <BodyTextLight style={{ fontSize: 14 }}>
                    {">"} {currentLocation[2]}
                  </BodyTextLight>
                )}
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: "#fff",
                  borderWidth: 1,
                  borderColor: colors.primaryBg,
                  borderRadius: 10,
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  marginVertical: 10,
                }}
                onPress={handleModal}
              >
                <BodyTextLight style={{ color: colors.primaryBg }}>
                  Filter
                </BodyTextLight>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 20 }}>
              {posts.map((post) => (
                <AdminPostList
                  navigation={navigation}
                  key={generateId()}
                  post={post}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <FloatingBtn navigation={navigation} />
    </SafeAreaView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  div: {
    flex: 1,
    backgroundColor: colors.white,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  view: {
    justifyContent: "flex-start",
    zIndex: -1,
    width: "100%",
    height: Dimensions.get("window").height,
    backgroundColor: colors.white,
  },
  noPostView: {
    justifyContent: "flex-start",
    zIndex: -1,
    width: "100%",
    height: Dimensions.get("window").height - 150,
    backgroundColor: colors.white,
  },
  float: {
    position: "absolute",
    bottom: -60,
    zIndex: 3,
  },
});
