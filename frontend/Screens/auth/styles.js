import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  screenTitle: {
    fontSize: 18,
    textAlign: "center",
    color: "#212121",
    fontFamily: "Inter-Medium",
  },

  formWrapper: {
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    alignItems: "center",
  },

  form: {
    paddingBottom: 78,
    paddingTop: 92,
  },

  // shadowProp: {
  //   ...Platform.select({
  //     ios: {
  //       shadowColor: "#171717",
  //       shadowOffset: { width: 0, height: 3 },
  //       shadowOpacity: 0.4,
  //       shadowRadius: 2,
  //     },
  //     android: {
  //       elevation: 3,
  //       shadowColor: "#000",
  //     },
  //     default: {
  //       shadowColor: "#171717",
  //       shadowOffset: { width: 0, height: 3 },
  //       shadowOpacity: 0.4,
  //       shadowRadius: 2,
  //     },
  //   }),
  // },

  input: {
    borderColor: "#E8E8E8",
    borderWidth: 1,
    height: 50,
    paddingLeft: 24,
    borderRadius: 8,
    marginTop: 17,
    fontSize: 14,
    fontFamily: "Inter-Regular",
  },
  inputWrapper: {
    marginTop: 16,
    // marginHorizontal: 40,
  },

  btnWithGradient: {
    borderRadius: 8,
    // borderWidth: 1,
    marginTop: 43,
    // height: 51,
    paddingBottom: 14,
    paddingTop: 14,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 60,

    // ...Platform.select({
    //   ios: {
    //     backgroundColor: "#fff",
    //     borderColor: "#FF6C00",
    //   },
    //   android: {
    //     backgroundColor: "#fff",
    //     borderColor: "#FF6C00",
    //   },
    //   default: {
    //     backgroundColor: "#fff",
    //     borderColor: "#FF6C00",
    //   },
    // }),
  },

  btn: {
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 43,
    height: 51,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,

    // ...Platform.select({
    //   ios: {
    //     backgroundColor: "#FF6C00",
    //     borderColor: "#FF6C00",
    //   },
    //   android: {
    //     backgroundColor: "#FF6C00",
    //     borderColor: "#FF6C00",
    //   },
    //   default: {
    //     backgroundColor: "#FF6C00",
    //     borderColor: "#FF6C00",
    //   },
    // }),
  },
  btnIsSignIn: {
    color: "#1B4371",
    textAlign: "center",
    marginTop: 16,
  },
  btnTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Inter-Bold",
  },
  showPassTitle: {
    fontFamily: "Inter-Regular",

    color: "#1B4371",
    position: "absolute",
    right: 16,
    top: 19,
    paddingVertical: 15,
    // cursor: "pointer",
  },
});
