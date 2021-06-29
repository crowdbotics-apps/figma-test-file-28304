import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_2_40} />
      <View style={styles.View_2_75} />
      <View style={styles.View_2_76} />
      <View style={styles.View_2_77} />
      <View style={styles.View_2_72} />
      <View style={styles.View_2_73} />
      <View style={styles.View_2_74} />
      <View style={styles.View_2_29} />
      <View style={styles.View_2_62} />
      <View style={styles.View_2_37} />
      <View style={styles.View_2_0} />
      <View style={styles.View_2_61} />
      <View style={styles.View_2_79} />
      <View style={styles.View_2_6} />
      <View style={styles.View_2_1}>
        <Text style={styles.Text_2_1}>Web Development</Text>
      </View>
      <View style={styles.View_2_15}>
        <Text style={styles.Text_2_15}>
          Instructor Name   emails@codingdojo.com (241) 563-1809
        </Text>
      </View>
      <View style={styles.View_2_22}>
        <Text style={styles.Text_2_22}>Dec 13th, 2020 - March 11th, 2021</Text>
      </View>
      <View style={styles.View_2_63}>
        <Text style={styles.Text_2_63}>Saudi Arabia - Riyadh</Text>
      </View>
      <View style={styles.View_3_60}>
        <Text style={styles.Text_3_60}>Amreet Walters</Text>
      </View>
      <View style={styles.View_2_38}>
        <Text style={styles.Text_2_38}>Student Search </Text>
      </View>
      <View style={styles.View_2_7}>
        <Text style={styles.Text_2_7}>Student Name</Text>
      </View>
      <View style={styles.View_3_5}>
        <Text style={styles.Text_3_5}>
          Wade Warren Esther Howard Cameron Williamson Brooklyn Simmons Leslie
          Alexander Jenny Wilson Guy Hawkins Robert Fox Jacob Jones Kristin
          Watson Cody Fisher Savannah Nguyen Bessie Cooper Albert Flores Ralph
          Edwards Ronald Richards Darlene Robertson Annette Black Floyd Miles
          Dianne Russell Devon Lane Darrell Steward Marvin McKinney Jerome Bell
          Courtney Henry Theresa Webb
        </Text>
      </View>
      <View style={styles.View_2_9}>
        <Text style={styles.Text_2_9}>Attendance %</Text>
      </View>
      <View style={styles.View_3_67}>
        <Text style={styles.Text_3_67}>76%</Text>
      </View>
      <View style={styles.View_3_129}>
        <Text style={styles.Text_3_129}>76%</Text>
      </View>
      <View style={styles.View_3_193}>
        <Text style={styles.Text_3_193}>76%</Text>
      </View>
      <View style={styles.View_3_286}>
        <Text style={styles.Text_3_286}>2/10</Text>
      </View>
      <View style={styles.View_3_293}>
        <Text style={styles.Text_3_293}>2/10</Text>
      </View>
      <View style={styles.View_3_294}>
        <Text style={styles.Text_3_294}>2/10</Text>
      </View>
      <View style={styles.View_3_297}>
        <Text style={styles.Text_3_297}>2/10</Text>
      </View>
      <View style={styles.View_3_299}>
        <Text style={styles.Text_3_299}>2/10</Text>
      </View>
      <View style={styles.View_3_287}>
        <Text style={styles.Text_3_287}>4/10</Text>
      </View>
      <View style={styles.View_3_288}>
        <Text style={styles.Text_3_288}>5/10</Text>
      </View>
      <View style={styles.View_3_291}>
        <Text style={styles.Text_3_291}>5/10</Text>
      </View>
      <View style={styles.View_3_295}>
        <Text style={styles.Text_3_295}>5/10</Text>
      </View>
      <View style={styles.View_3_298}>
        <Text style={styles.Text_3_298}>5/10</Text>
      </View>
      <View style={styles.View_3_300}>
        <Text style={styles.Text_3_300}>5/10</Text>
      </View>
      <View style={styles.View_3_302}>
        <Text style={styles.Text_3_302}>5/10</Text>
      </View>
      <View style={styles.View_3_303}>
        <Text style={styles.Text_3_303}>5/10</Text>
      </View>
      <View style={styles.View_3_301}>
        <Text style={styles.Text_3_301}>5/10</Text>
      </View>
      <View style={styles.View_3_289}>
        <Text style={styles.Text_3_289}>6/10</Text>
      </View>
      <View style={styles.View_3_296}>
        <Text style={styles.Text_3_296}>6/10</Text>
      </View>
      <View style={styles.View_3_81}>
        <Text style={styles.Text_3_81}>76%</Text>
      </View>
      <View style={styles.View_3_130}>
        <Text style={styles.Text_3_130}>76%</Text>
      </View>
      <View style={styles.View_3_194}>
        <Text style={styles.Text_3_194}>76%</Text>
      </View>
      <View style={styles.View_3_101}>
        <Text style={styles.Text_3_101}>76%</Text>
      </View>
      <View style={styles.View_3_131}>
        <Text style={styles.Text_3_131}>76%</Text>
      </View>
      <View style={styles.View_3_195}>
        <Text style={styles.Text_3_195}>76%</Text>
      </View>
      <View style={styles.View_3_121}>
        <Text style={styles.Text_3_121}>76%</Text>
      </View>
      <View style={styles.View_3_132}>
        <Text style={styles.Text_3_132}>76%</Text>
      </View>
      <View style={styles.View_3_196}>
        <Text style={styles.Text_3_196}>76%</Text>
      </View>
      <View style={styles.View_3_117}>
        <Text style={styles.Text_3_117}>76%</Text>
      </View>
      <View style={styles.View_3_133}>
        <Text style={styles.Text_3_133}>76%</Text>
      </View>
      <View style={styles.View_3_197}>
        <Text style={styles.Text_3_197}>76%</Text>
      </View>
      <View style={styles.View_3_69}>
        <Text style={styles.Text_3_69}>63%</Text>
      </View>
      <View style={styles.View_3_134}>
        <Text style={styles.Text_3_134}>63%</Text>
      </View>
      <View style={styles.View_3_198}>
        <Text style={styles.Text_3_198}>63%</Text>
      </View>
      <View style={styles.View_3_85}>
        <Text style={styles.Text_3_85}>63%</Text>
      </View>
      <View style={styles.View_3_135}>
        <Text style={styles.Text_3_135}>63%</Text>
      </View>
      <View style={styles.View_3_199}>
        <Text style={styles.Text_3_199}>63%</Text>
      </View>
      <View style={styles.View_3_105}>
        <Text style={styles.Text_3_105}>63%</Text>
      </View>
      <View style={styles.View_3_136}>
        <Text style={styles.Text_3_136}>63%</Text>
      </View>
      <View style={styles.View_3_200}>
        <Text style={styles.Text_3_200}>63%</Text>
      </View>
      <View style={styles.View_3_89}>
        <Text style={styles.Text_3_89}>58%</Text>
      </View>
      <View style={styles.View_3_137}>
        <Text style={styles.Text_3_137}>58%</Text>
      </View>
      <View style={styles.View_3_201}>
        <Text style={styles.Text_3_201}>58%</Text>
      </View>
      <View style={styles.View_3_125}>
        <Text style={styles.Text_3_125}>58%</Text>
      </View>
      <View style={styles.View_3_138}>
        <Text style={styles.Text_3_138}>58%</Text>
      </View>
      <View style={styles.View_3_202}>
        <Text style={styles.Text_3_202}>58%</Text>
      </View>
      <View style={styles.View_3_93}>
        <Text style={styles.Text_3_93}>58%</Text>
      </View>
      <View style={styles.View_3_139}>
        <Text style={styles.Text_3_139}>58%</Text>
      </View>
      <View style={styles.View_3_203}>
        <Text style={styles.Text_3_203}>58%</Text>
      </View>
      <View style={styles.View_3_109}>
        <Text style={styles.Text_3_109}>58%</Text>
      </View>
      <View style={styles.View_3_140}>
        <Text style={styles.Text_3_140}>58%</Text>
      </View>
      <View style={styles.View_3_204}>
        <Text style={styles.Text_3_204}>58%</Text>
      </View>
      <View style={styles.View_3_97}>
        <Text style={styles.Text_3_97}>29%</Text>
      </View>
      <View style={styles.View_3_141}>
        <Text style={styles.Text_3_141}>29%</Text>
      </View>
      <View style={styles.View_3_205}>
        <Text style={styles.Text_3_205}>29%</Text>
      </View>
      <View style={styles.View_3_77}>
        <Text style={styles.Text_3_77}>87%</Text>
      </View>
      <View style={styles.View_3_142}>
        <Text style={styles.Text_3_142}>87%</Text>
      </View>
      <View style={styles.View_3_206}>
        <Text style={styles.Text_3_206}>87%</Text>
      </View>
      <View style={styles.View_3_73}>
        <Text style={styles.Text_3_73}>47%</Text>
      </View>
      <View style={styles.View_3_143}>
        <Text style={styles.Text_3_143}>47%</Text>
      </View>
      <View style={styles.View_3_207}>
        <Text style={styles.Text_3_207}>47%</Text>
      </View>
      <View style={styles.View_3_113}>
        <Text style={styles.Text_3_113}>47%</Text>
      </View>
      <View style={styles.View_3_144}>
        <Text style={styles.Text_3_144}>47%</Text>
      </View>
      <View style={styles.View_3_208}>
        <Text style={styles.Text_3_208}>47%</Text>
      </View>
      <View style={styles.View_3_14}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa0/9b5c/d23deb8b33752a5feb622742be6ecab4"
          }}
          style={styles.ImageBackground_3_12}
        />
        <View style={styles.View_3_11}>
          <Text style={styles.Text_3_11}>89</Text>
        </View>
      </View>
      <View style={styles.View_3_15}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa0/9b5c/d23deb8b33752a5feb622742be6ecab4"
          }}
          style={styles.ImageBackground_3_16}
        />
        <View style={styles.View_3_17}>
          <Text style={styles.Text_3_17}>90</Text>
        </View>
      </View>
      <View style={styles.View_3_18}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa0/9b5c/d23deb8b33752a5feb622742be6ecab4"
          }}
          style={styles.ImageBackground_3_19}
        />
        <View style={styles.View_3_20}>
          <Text style={styles.Text_3_20}>78</Text>
        </View>
      </View>
      <View style={styles.View_3_21}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1acb/2e43/60e69af516593c3112e246b3f8f562a1"
          }}
          style={styles.ImageBackground_3_22}
        />
        <View style={styles.View_3_23}>
          <Text style={styles.Text_3_23}>63</Text>
        </View>
      </View>
      <View style={styles.View_3_24}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa0/9b5c/d23deb8b33752a5feb622742be6ecab4"
          }}
          style={styles.ImageBackground_3_25}
        />
        <View style={styles.View_3_26}>
          <Text style={styles.Text_3_26}>88</Text>
        </View>
      </View>
      <View style={styles.View_3_27}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa0/9b5c/d23deb8b33752a5feb622742be6ecab4"
          }}
          style={styles.ImageBackground_3_28}
        />
        <View style={styles.View_3_29}>
          <Text style={styles.Text_3_29}>75</Text>
        </View>
      </View>
      <View style={styles.View_3_30}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa0/9b5c/d23deb8b33752a5feb622742be6ecab4"
          }}
          style={styles.ImageBackground_3_31}
        />
        <View style={styles.View_3_32}>
          <Text style={styles.Text_3_32}>84</Text>
        </View>
      </View>
      <View style={styles.View_3_33}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa0/9b5c/d23deb8b33752a5feb622742be6ecab4"
          }}
          style={styles.ImageBackground_3_34}
        />
        <View style={styles.View_3_35}>
          <Text style={styles.Text_3_35}>91</Text>
        </View>
      </View>
      <View style={styles.View_3_36}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/416a/926f/04afd8993b2be53f53ad0efd81531d60"
          }}
          style={styles.ImageBackground_3_37}
        />
        <View style={styles.View_3_38}>
          <Text style={styles.Text_3_38}>24</Text>
        </View>
      </View>
      <View style={styles.View_3_39}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa0/9b5c/d23deb8b33752a5feb622742be6ecab4"
          }}
          style={styles.ImageBackground_3_40}
        />
        <View style={styles.View_3_41}>
          <Text style={styles.Text_3_41}>98</Text>
        </View>
      </View>
      <View style={styles.View_3_42}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa0/9b5c/d23deb8b33752a5feb622742be6ecab4"
          }}
          style={styles.ImageBackground_3_43}
        />
        <View style={styles.View_3_44}>
          <Text style={styles.Text_3_44}>78</Text>
        </View>
      </View>
      <View style={styles.View_3_45}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa0/9b5c/d23deb8b33752a5feb622742be6ecab4"
          }}
          style={styles.ImageBackground_3_46}
        />
        <View style={styles.View_3_47}>
          <Text style={styles.Text_3_47}>91</Text>
        </View>
      </View>
      <View style={styles.View_3_48}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/416a/926f/04afd8993b2be53f53ad0efd81531d60"
          }}
          style={styles.ImageBackground_3_49}
        />
        <View style={styles.View_3_50}>
          <Text style={styles.Text_3_50}>15</Text>
        </View>
      </View>
      <View style={styles.View_3_51}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa0/9b5c/d23deb8b33752a5feb622742be6ecab4"
          }}
          style={styles.ImageBackground_3_52}
        />
        <View style={styles.View_3_53}>
          <Text style={styles.Text_3_53}>97</Text>
        </View>
      </View>
      <View style={styles.View_3_54}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa0/9b5c/d23deb8b33752a5feb622742be6ecab4"
          }}
          style={styles.ImageBackground_3_55}
        />
        <View style={styles.View_3_56}>
          <Text style={styles.Text_3_56}>86</Text>
        </View>
      </View>
      <View style={styles.View_3_57}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa0/9b5c/d23deb8b33752a5feb622742be6ecab4"
          }}
          style={styles.ImageBackground_3_58}
        />
        <View style={styles.View_3_59}>
          <Text style={styles.Text_3_59}>75</Text>
        </View>
      </View>
      <View style={styles.View_2_10}>
        <Text style={styles.Text_2_10}>Required Assignments</Text>
      </View>
      <View style={styles.View_2_11}>
        <Text style={styles.Text_2_11}>Optional Assignments</Text>
      </View>
      <View style={styles.View_2_12}>
        <Text style={styles.Text_2_12}>Milestone Assignments</Text>
      </View>
      <View style={styles.View_2_13}>
        <Text style={styles.Text_2_13}>Belt Exams</Text>
      </View>
      <View style={styles.View_2_14}>
        <Text style={styles.Text_2_14}>Belts</Text>
      </View>
      <View style={styles.View_2_2}>
        <Text style={styles.Text_2_2}>PROGRAMS</Text>
      </View>
      <View style={styles.View_2_30}>
        <Text style={styles.Text_2_30}>Blockchain</Text>
      </View>
      <View style={styles.View_2_32}>
        <Text style={styles.Text_2_32}>UX/UI Design</Text>
      </View>
      <View style={styles.View_2_35}>
        <Text style={styles.Text_2_35}>Web Development</Text>
      </View>
      <View style={styles.View_2_31}>
        <Text style={styles.Text_2_31}>Cybersecurity</Text>
      </View>
      <View style={styles.View_2_33}>
        <Text style={styles.Text_2_33}>Data Science</Text>
      </View>
      <View style={styles.View_2_34}>
        <Text style={styles.Text_2_34}>Project Management</Text>
      </View>
      <View style={styles.View_2_25}>
        <Text style={styles.Text_2_25}>Dashboard</Text>
      </View>
      <View style={styles.View_2_27}>
        <Text style={styles.Text_2_27}>Student Records</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/250a/6492/2e7da12e1254cc899644a70990c37a9f"
        }}
        style={styles.ImageBackground_2_3}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8315/2da5/ce25e06a5441b2e8fc39f9fbbc80b308"
        }}
        style={styles.ImageBackground_2_5}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c77/0d9c/fbabbb9c90bcb23f564279ac89272527"
        }}
        style={styles.ImageBackground_2_19}
      />
      <View style={styles.View_2_26} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5274/33ee/da409696425818f541c60fe072260f6d"
        }}
        style={styles.ImageBackground_2_70}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a6/63d3/8e362c806dae957a61b55000b462cf08"
        }}
        style={styles.ImageBackground_2_41}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a6/63d3/8e362c806dae957a61b55000b462cf08"
        }}
        style={styles.ImageBackground_2_42}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a6/63d3/8e362c806dae957a61b55000b462cf08"
        }}
        style={styles.ImageBackground_2_43}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a6/63d3/8e362c806dae957a61b55000b462cf08"
        }}
        style={styles.ImageBackground_2_44}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a6/63d3/8e362c806dae957a61b55000b462cf08"
        }}
        style={styles.ImageBackground_2_45}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a6/63d3/8e362c806dae957a61b55000b462cf08"
        }}
        style={styles.ImageBackground_2_46}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a6/63d3/8e362c806dae957a61b55000b462cf08"
        }}
        style={styles.ImageBackground_2_47}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a6/63d3/8e362c806dae957a61b55000b462cf08"
        }}
        style={styles.ImageBackground_2_48}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a6/63d3/8e362c806dae957a61b55000b462cf08"
        }}
        style={styles.ImageBackground_2_49}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a6/63d3/8e362c806dae957a61b55000b462cf08"
        }}
        style={styles.ImageBackground_2_50}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a6/63d3/8e362c806dae957a61b55000b462cf08"
        }}
        style={styles.ImageBackground_2_51}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a6/63d3/8e362c806dae957a61b55000b462cf08"
        }}
        style={styles.ImageBackground_2_52}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a6/63d3/8e362c806dae957a61b55000b462cf08"
        }}
        style={styles.ImageBackground_2_53}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a6/63d3/8e362c806dae957a61b55000b462cf08"
        }}
        style={styles.ImageBackground_2_54}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a6/63d3/8e362c806dae957a61b55000b462cf08"
        }}
        style={styles.ImageBackground_2_55}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a6/63d3/8e362c806dae957a61b55000b462cf08"
        }}
        style={styles.ImageBackground_2_80}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c783/0c4d/83ae3f62d8dc0d65b011ff97d5aae18f"
        }}
        style={styles.ImageBackground_2_67}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c783/0c4d/83ae3f62d8dc0d65b011ff97d5aae18f"
        }}
        style={styles.ImageBackground_3_61}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c783/0c4d/83ae3f62d8dc0d65b011ff97d5aae18f"
        }}
        style={styles.ImageBackground_2_68}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_62}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_145}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_209}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_82}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_146}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_210}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_102}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_147}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_211}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_122}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_148}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_212}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_118}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_149}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_213}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_70}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_150}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_214}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_86}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_151}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_215}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_106}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_152}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_216}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_90}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_153}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_217}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_126}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_154}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_218}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_94}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_155}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_219}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_110}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_156}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_220}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_98}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_157}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_221}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_78}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_158}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_222}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_74}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_159}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_223}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_114}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_160}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_3_224}
      />
      <View style={styles.View_3_65} />
      <View style={styles.View_3_161} />
      <View style={styles.View_3_225} />
      <View style={styles.View_3_83} />
      <View style={styles.View_3_162} />
      <View style={styles.View_3_226} />
      <View style={styles.View_3_103} />
      <View style={styles.View_3_163} />
      <View style={styles.View_3_227} />
      <View style={styles.View_3_123} />
      <View style={styles.View_3_164} />
      <View style={styles.View_3_228} />
      <View style={styles.View_3_119} />
      <View style={styles.View_3_165} />
      <View style={styles.View_3_229} />
      <View style={styles.View_3_71} />
      <View style={styles.View_3_166} />
      <View style={styles.View_3_230} />
      <View style={styles.View_3_87} />
      <View style={styles.View_3_167} />
      <View style={styles.View_3_231} />
      <View style={styles.View_3_107} />
      <View style={styles.View_3_168} />
      <View style={styles.View_3_232} />
      <View style={styles.View_3_91} />
      <View style={styles.View_3_169} />
      <View style={styles.View_3_233} />
      <View style={styles.View_3_127} />
      <View style={styles.View_3_170} />
      <View style={styles.View_3_234} />
      <View style={styles.View_3_95} />
      <View style={styles.View_3_171} />
      <View style={styles.View_3_235} />
      <View style={styles.View_3_111} />
      <View style={styles.View_3_172} />
      <View style={styles.View_3_236} />
      <View style={styles.View_3_99} />
      <View style={styles.View_3_173} />
      <View style={styles.View_3_237} />
      <View style={styles.View_3_79} />
      <View style={styles.View_3_174} />
      <View style={styles.View_3_238} />
      <View style={styles.View_3_75} />
      <View style={styles.View_3_175} />
      <View style={styles.View_3_239} />
      <View style={styles.View_3_115} />
      <View style={styles.View_3_176} />
      <View style={styles.View_3_240} />
      <View style={styles.View_3_66} />
      <View style={styles.View_3_177} />
      <View style={styles.View_3_241} />
      <View style={styles.View_3_84} />
      <View style={styles.View_3_178} />
      <View style={styles.View_3_242} />
      <View style={styles.View_3_104} />
      <View style={styles.View_3_179} />
      <View style={styles.View_3_243} />
      <View style={styles.View_3_124} />
      <View style={styles.View_3_180} />
      <View style={styles.View_3_244} />
      <View style={styles.View_3_120} />
      <View style={styles.View_3_181} />
      <View style={styles.View_3_245} />
      <View style={styles.View_3_72} />
      <View style={styles.View_3_182} />
      <View style={styles.View_3_246} />
      <View style={styles.View_3_88} />
      <View style={styles.View_3_183} />
      <View style={styles.View_3_247} />
      <View style={styles.View_3_108} />
      <View style={styles.View_3_184} />
      <View style={styles.View_3_248} />
      <View style={styles.View_3_92} />
      <View style={styles.View_3_185} />
      <View style={styles.View_3_249} />
      <View style={styles.View_3_128} />
      <View style={styles.View_3_186} />
      <View style={styles.View_3_250} />
      <View style={styles.View_3_96} />
      <View style={styles.View_3_187} />
      <View style={styles.View_3_251} />
      <View style={styles.View_3_112} />
      <View style={styles.View_3_188} />
      <View style={styles.View_3_252} />
      <View style={styles.View_3_100} />
      <View style={styles.View_3_189} />
      <View style={styles.View_3_253} />
      <View style={styles.View_3_80} />
      <View style={styles.View_3_190} />
      <View style={styles.View_3_254} />
      <View style={styles.View_3_76} />
      <View style={styles.View_3_191} />
      <View style={styles.View_3_255} />
      <View style={styles.View_3_116} />
      <View style={styles.View_3_192} />
      <View style={styles.View_3_256} />
      <View style={styles.View_3_257} />
      <View style={styles.View_3_265} />
      <View style={styles.View_3_276} />
      <View style={styles.View_3_264} />
      <View style={styles.View_3_266} />
      <View style={styles.View_3_277} />
      <View style={styles.View_3_258} />
      <View style={styles.View_3_267} />
      <View style={styles.View_3_278} />
      <View style={styles.View_3_304} />
      <View style={styles.View_3_282} />
      <View style={styles.View_3_260} />
      <View style={styles.View_3_268} />
      <View style={styles.View_3_279} />
      <View style={styles.View_3_305} />
      <View style={styles.View_3_259} />
      <View style={styles.View_3_269} />
      <View style={styles.View_3_280} />
      <View style={styles.View_3_306} />
      <View style={styles.View_3_283} />
      <View style={styles.View_3_285} />
      <View style={styles.View_3_261} />
      <View style={styles.View_3_270} />
      <View style={styles.View_3_281} />
      <View style={styles.View_3_307} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6eb0/6377/0c040e57b359cd16e494e340d17df5dd"
        }}
        style={styles.ImageBackground_4_3}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a429/40eb/2ffad5831fe0e4f6cd1c2341ad63dcd4"
        }}
        style={styles.ImageBackground_4_5}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc72/c33f/6a9c15b8662daa8139c506b77e4384bf"
        }}
        style={styles.ImageBackground_4_6}
      />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("139.89071038251367%") },
  View_2_40: {
    width: wp("13.26388888888889%"),
    minWidth: wp("13.26388888888889%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.25%"),
    top: hp("45.3551912568306%"),
    backgroundColor: "rgba(6, 170, 226, 1)",
    opacity: 0.25
  },
  View_2_75: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("45.3551912568306%"),
    backgroundColor: "rgba(6, 170, 226, 1)",
    opacity: 0.15000000596046448
  },
  View_2_76: {
    width: wp("18.333333333333332%"),
    minWidth: wp("18.333333333333332%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.93055555555556%"),
    top: hp("45.3551912568306%"),
    backgroundColor: "rgba(6, 170, 226, 1)",
    opacity: 0.15000000596046448
  },
  View_2_77: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.18055555555556%"),
    top: hp("45.3551912568306%"),
    backgroundColor: "rgba(6, 170, 226, 1)",
    opacity: 0.15000000596046448
  },
  View_2_72: {
    width: wp("18.125%"),
    minWidth: wp("18.125%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.73611111111111%"),
    top: hp("45.3551912568306%"),
    backgroundColor: "rgba(6, 170, 226, 1)",
    opacity: 0.25
  },
  View_2_73: {
    width: wp("17.5%"),
    minWidth: wp("17.5%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.54166666666667%"),
    top: hp("45.3551912568306%"),
    backgroundColor: "rgba(6, 170, 226, 1)",
    opacity: 0.25
  },
  View_2_74: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.125%"),
    top: hp("45.3551912568306%"),
    backgroundColor: "rgba(6, 170, 226, 1)",
    opacity: 0.25
  },
  View_2_29: {
    width: wp("20.34722222222222%"),
    minWidth: wp("20.34722222222222%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.84722222222222%"),
    top: hp("13.114754098360656%"),
    backgroundColor: "rgba(205, 238, 249, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_2_62: {
    width: wp("14.166666666666666%"),
    minWidth: wp("14.166666666666666%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.95833333333333%"),
    top: hp("13.114754098360656%"),
    backgroundColor: "rgba(205, 238, 249, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_2_37: {
    width: wp("19.23611111111111%"),
    minWidth: wp("19.23611111111111%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.88888888888889%"),
    top: hp("36.6120218579235%"),
    backgroundColor: "rgba(205, 238, 249, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_2_0: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    height: hp("132.78688524590163%"),
    minHeight: hp("132.78688524590163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.103825136612022%"),
    backgroundColor: "rgba(6, 170, 226, 1)"
  },
  View_2_61: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48.63387978142077%"),
    backgroundColor: "rgba(0, 130, 174, 1)"
  },
  View_2_79: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    height: hp("8.60655737704918%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.01639344262295%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.4000000059604645
  },
  View_2_6: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.153005464480875%"),
    minHeight: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.1366120218579235%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_1: {
    width: wp("21.805555555555557%"),
    minWidth: wp("21.805555555555557%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.680555555555557%"),
    top: hp("12.978142076502733%"),
    justifyContent: "flex-start"
  },
  Text_2_1: {
    color: "rgba(85, 133, 181, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_15: {
    width: wp("15.555555555555555%"),
    minWidth: wp("15.555555555555555%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.916666666666664%"),
    top: hp("24.726775956284154%"),
    justifyContent: "flex-start"
  },
  Text_2_15: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_22: {
    width: wp("31.319444444444443%"),
    minWidth: wp("31.319444444444443%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.91666666666667%"),
    top: hp("14.344262295081966%"),
    justifyContent: "flex-start"
  },
  Text_2_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_63: {
    width: wp("11.041666666666666%"),
    minWidth: wp("11.041666666666666%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.69444444444444%"),
    top: hp("14.344262295081966%"),
    justifyContent: "flex-start"
  },
  Text_2_63: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_60: {
    width: wp("11.041666666666666%"),
    minWidth: wp("11.041666666666666%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.23611111111111%"),
    top: hp("3.825136612021858%"),
    justifyContent: "flex-start"
  },
  Text_3_60: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_38: {
    width: wp("8.88888888888889%"),
    minWidth: wp("8.88888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.23611111111111%"),
    top: hp("37.84153005464481%"),
    justifyContent: "flex-start"
  },
  Text_2_38: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_7: {
    width: wp("10.972222222222221%"),
    minWidth: wp("10.972222222222221%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.347222222222223%"),
    top: hp("46.994535519125684%"),
    justifyContent: "flex-start"
  },
  Text_2_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_5: {
    width: wp("10.972222222222221%"),
    minWidth: wp("10.972222222222221%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.652777777777779%"),
    top: hp("44.94535519125683%"),
    justifyContent: "flex-start"
  },
  Text_3_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_9: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.90277777777778%"),
    top: hp("46.994535519125684%"),
    justifyContent: "flex-start"
  },
  Text_2_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_67: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.83333333333333%"),
    top: hp("52.04918032786885%"),
    justifyContent: "flex-start"
  },
  Text_3_67: {
    color: "rgba(220, 149, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_129: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.16666666666667%"),
    top: hp("52.04918032786885%"),
    justifyContent: "flex-start"
  },
  Text_3_129: {
    color: "rgba(85, 133, 181, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_193: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.19444444444444%"),
    top: hp("52.04918032786885%"),
    justifyContent: "flex-start"
  },
  Text_3_193: {
    color: "rgba(83, 168, 182, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_286: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.47222222222221%"),
    top: hp("52.04918032786885%"),
    justifyContent: "flex-start"
  },
  Text_3_286: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_293: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.47222222222221%"),
    top: hp("73.90710382513662%"),
    justifyContent: "flex-start"
  },
  Text_3_293: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_294: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.47222222222221%"),
    top: hp("90.30054644808743%"),
    justifyContent: "flex-start"
  },
  Text_3_294: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_297: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.47222222222221%"),
    top: hp("101.63934426229508%"),
    justifyContent: "flex-start"
  },
  Text_3_297: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_299: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.47222222222221%"),
    top: hp("112.56830601092895%"),
    justifyContent: "flex-start"
  },
  Text_3_299: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_287: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.47222222222221%"),
    top: hp("57.786885245901644%"),
    justifyContent: "flex-start"
  },
  Text_3_287: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_288: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.47222222222221%"),
    top: hp("63.114754098360656%"),
    justifyContent: "flex-start"
  },
  Text_3_288: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_291: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.47222222222221%"),
    top: hp("79.6448087431694%"),
    justifyContent: "flex-start"
  },
  Text_3_291: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_295: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.47222222222221%"),
    top: hp("95.76502732240438%"),
    justifyContent: "flex-start"
  },
  Text_3_295: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_298: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.47222222222221%"),
    top: hp("106.69398907103825%"),
    justifyContent: "flex-start"
  },
  Text_3_298: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_300: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.47222222222221%"),
    top: hp("117.89617486338797%"),
    justifyContent: "flex-start"
  },
  Text_3_300: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_302: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.47222222222221%"),
    top: hp("128.96174863387978%"),
    justifyContent: "flex-start"
  },
  Text_3_302: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_303: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.47222222222221%"),
    top: hp("134.15300546448088%"),
    justifyContent: "flex-start"
  },
  Text_3_303: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_301: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.47222222222221%"),
    top: hp("123.36065573770492%"),
    justifyContent: "flex-start"
  },
  Text_3_301: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_289: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.47222222222221%"),
    top: hp("68.71584699453553%"),
    justifyContent: "flex-start"
  },
  Text_3_289: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_296: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.47222222222221%"),
    top: hp("85.10928961748634%"),
    justifyContent: "flex-start"
  },
  Text_3_296: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_81: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.83333333333333%"),
    top: hp("74.18032786885246%"),
    justifyContent: "flex-start"
  },
  Text_3_81: {
    color: "rgba(220, 149, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_130: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.16666666666667%"),
    top: hp("74.18032786885246%"),
    justifyContent: "flex-start"
  },
  Text_3_130: {
    color: "rgba(85, 133, 181, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_194: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.19444444444444%"),
    top: hp("74.18032786885246%"),
    justifyContent: "flex-start"
  },
  Text_3_194: {
    color: "rgba(83, 168, 182, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_101: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.83333333333333%"),
    top: hp("101.22950819672131%"),
    justifyContent: "flex-start"
  },
  Text_3_101: {
    color: "rgba(220, 149, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_131: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.16666666666667%"),
    top: hp("101.22950819672131%"),
    justifyContent: "flex-start"
  },
  Text_3_131: {
    color: "rgba(85, 133, 181, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_195: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.19444444444444%"),
    top: hp("101.22950819672131%"),
    justifyContent: "flex-start"
  },
  Text_3_195: {
    color: "rgba(83, 168, 182, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_121: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.83333333333333%"),
    top: hp("128.96174863387978%"),
    justifyContent: "flex-start"
  },
  Text_3_121: {
    color: "rgba(220, 149, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_132: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.16666666666667%"),
    top: hp("128.96174863387978%"),
    justifyContent: "flex-start"
  },
  Text_3_132: {
    color: "rgba(85, 133, 181, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_196: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.19444444444444%"),
    top: hp("128.96174863387978%"),
    justifyContent: "flex-start"
  },
  Text_3_196: {
    color: "rgba(83, 168, 182, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_117: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.83333333333333%"),
    top: hp("123.36065573770492%"),
    justifyContent: "flex-start"
  },
  Text_3_117: {
    color: "rgba(220, 149, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_133: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.16666666666667%"),
    top: hp("123.36065573770492%"),
    justifyContent: "flex-start"
  },
  Text_3_133: {
    color: "rgba(85, 133, 181, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_197: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.19444444444444%"),
    top: hp("123.36065573770492%"),
    justifyContent: "flex-start"
  },
  Text_3_197: {
    color: "rgba(83, 168, 182, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_69: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.83333333333333%"),
    top: hp("57.786885245901644%"),
    justifyContent: "flex-start"
  },
  Text_3_69: {
    color: "rgba(220, 149, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_134: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.16666666666667%"),
    top: hp("57.786885245901644%"),
    justifyContent: "flex-start"
  },
  Text_3_134: {
    color: "rgba(85, 133, 181, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_198: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.19444444444444%"),
    top: hp("57.786885245901644%"),
    justifyContent: "flex-start"
  },
  Text_3_198: {
    color: "rgba(83, 168, 182, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_85: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.83333333333333%"),
    top: hp("79.50819672131148%"),
    justifyContent: "flex-start"
  },
  Text_3_85: {
    color: "rgba(220, 149, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_135: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.16666666666667%"),
    top: hp("79.50819672131148%"),
    justifyContent: "flex-start"
  },
  Text_3_135: {
    color: "rgba(85, 133, 181, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_199: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.19444444444444%"),
    top: hp("79.50819672131148%"),
    justifyContent: "flex-start"
  },
  Text_3_199: {
    color: "rgba(83, 168, 182, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_105: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.83333333333333%"),
    top: hp("106.83060109289617%"),
    justifyContent: "flex-start"
  },
  Text_3_105: {
    color: "rgba(220, 149, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_136: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.16666666666667%"),
    top: hp("106.83060109289617%"),
    justifyContent: "flex-start"
  },
  Text_3_136: {
    color: "rgba(85, 133, 181, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_200: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.19444444444444%"),
    top: hp("106.83060109289617%"),
    justifyContent: "flex-start"
  },
  Text_3_200: {
    color: "rgba(83, 168, 182, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_89: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.83333333333333%"),
    top: hp("84.97267759562843%"),
    justifyContent: "flex-start"
  },
  Text_3_89: {
    color: "rgba(220, 149, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_137: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.16666666666667%"),
    top: hp("84.97267759562843%"),
    justifyContent: "flex-start"
  },
  Text_3_137: {
    color: "rgba(85, 133, 181, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_201: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.19444444444444%"),
    top: hp("84.97267759562843%"),
    justifyContent: "flex-start"
  },
  Text_3_201: {
    color: "rgba(83, 168, 182, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_125: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.83333333333333%"),
    top: hp("134.2896174863388%"),
    justifyContent: "flex-start"
  },
  Text_3_125: {
    color: "rgba(220, 149, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_138: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.16666666666667%"),
    top: hp("134.2896174863388%"),
    justifyContent: "flex-start"
  },
  Text_3_138: {
    color: "rgba(85, 133, 181, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_202: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.19444444444444%"),
    top: hp("134.2896174863388%"),
    justifyContent: "flex-start"
  },
  Text_3_202: {
    color: "rgba(83, 168, 182, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_93: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.83333333333333%"),
    top: hp("90.43715846994536%"),
    justifyContent: "flex-start"
  },
  Text_3_93: {
    color: "rgba(220, 149, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_139: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.16666666666667%"),
    top: hp("90.43715846994536%"),
    justifyContent: "flex-start"
  },
  Text_3_139: {
    color: "rgba(85, 133, 181, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_203: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.19444444444444%"),
    top: hp("90.43715846994536%"),
    justifyContent: "flex-start"
  },
  Text_3_203: {
    color: "rgba(83, 168, 182, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_109: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.83333333333333%"),
    top: hp("112.29508196721312%"),
    justifyContent: "flex-start"
  },
  Text_3_109: {
    color: "rgba(220, 149, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_140: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.16666666666667%"),
    top: hp("112.29508196721312%"),
    justifyContent: "flex-start"
  },
  Text_3_140: {
    color: "rgba(85, 133, 181, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_204: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.19444444444444%"),
    top: hp("112.29508196721312%"),
    justifyContent: "flex-start"
  },
  Text_3_204: {
    color: "rgba(83, 168, 182, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_97: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.83333333333333%"),
    top: hp("96.17486338797814%"),
    justifyContent: "flex-start"
  },
  Text_3_97: {
    color: "rgba(220, 50, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_141: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.16666666666667%"),
    top: hp("96.17486338797814%"),
    justifyContent: "flex-start"
  },
  Text_3_141: {
    color: "rgba(220, 50, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_205: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.19444444444444%"),
    top: hp("96.17486338797814%"),
    justifyContent: "flex-start"
  },
  Text_3_205: {
    color: "rgba(220, 50, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_77: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.83333333333333%"),
    top: hp("68.5792349726776%"),
    justifyContent: "flex-start"
  },
  Text_3_77: {
    color: "rgba(220, 149, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_142: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.16666666666667%"),
    top: hp("68.5792349726776%"),
    justifyContent: "flex-start"
  },
  Text_3_142: {
    color: "rgba(85, 133, 181, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_206: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.19444444444444%"),
    top: hp("68.5792349726776%"),
    justifyContent: "flex-start"
  },
  Text_3_206: {
    color: "rgba(83, 168, 182, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_73: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.83333333333333%"),
    top: hp("63.25136612021858%"),
    justifyContent: "flex-start"
  },
  Text_3_73: {
    color: "rgba(220, 50, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_143: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.16666666666667%"),
    top: hp("63.25136612021858%"),
    justifyContent: "flex-start"
  },
  Text_3_143: {
    color: "rgba(220, 50, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_207: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.19444444444444%"),
    top: hp("63.25136612021858%"),
    justifyContent: "flex-start"
  },
  Text_3_207: {
    color: "rgba(220, 50, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_113: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.83333333333333%"),
    top: hp("117.75956284153007%"),
    justifyContent: "flex-start"
  },
  Text_3_113: {
    color: "rgba(220, 50, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_144: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.16666666666667%"),
    top: hp("117.75956284153007%"),
    justifyContent: "flex-start"
  },
  Text_3_144: {
    color: "rgba(220, 50, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_208: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.19444444444444%"),
    top: hp("117.75956284153007%"),
    justifyContent: "flex-start"
  },
  Text_3_208: {
    color: "rgba(220, 50, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_14: {
    width: wp("2.116935518052843%"),
    minWidth: wp("2.116935518052843%"),
    height: hp("3.5739468746497987%"),
    minHeight: hp("3.5739468746497987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.666666666666668%"),
    top: hp("51.09289617486339%")
  },
  ImageBackground_3_12: {
    width: wp("1.8145161204867892%"),
    minWidth: wp("1.8145161204867892%"),
    height: hp("3.569539909154339%"),
    minHeight: hp("3.569539909154339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11200798882378393%"),
    top: hp("0%")
  },
  View_3_11: {
    width: wp("2.116935518052843%"),
    minWidth: wp("2.116935518052843%"),
    minHeight: hp("2.617662721644334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054556%"),
    justifyContent: "flex-start"
  },
  Text_3_11: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_15: {
    width: wp("2.116935518052843%"),
    minWidth: wp("2.116935518052843%"),
    height: hp("3.5739468746497987%"),
    minHeight: hp("3.5739468746497987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.666666666666668%"),
    top: hp("56.69398907103825%")
  },
  ImageBackground_3_16: {
    width: wp("1.8145161204867892%"),
    minWidth: wp("1.8145161204867892%"),
    height: hp("3.569539909154339%"),
    minHeight: hp("3.569539909154339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11200798882378393%"),
    top: hp("0%")
  },
  View_3_17: {
    width: wp("2.116935518052843%"),
    minWidth: wp("2.116935518052843%"),
    minHeight: hp("2.617662721644334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054627%"),
    justifyContent: "flex-start"
  },
  Text_3_17: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_18: {
    width: wp("2.116935518052843%"),
    minWidth: wp("2.116935518052843%"),
    height: hp("3.5739468746497987%"),
    minHeight: hp("3.5739468746497987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.666666666666668%"),
    top: hp("62.158469945355186%")
  },
  ImageBackground_3_19: {
    width: wp("1.8145161204867892%"),
    minWidth: wp("1.8145161204867892%"),
    height: hp("3.569539909154339%"),
    minHeight: hp("3.569539909154339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11200798882378393%"),
    top: hp("0%")
  },
  View_3_20: {
    width: wp("2.116935518052843%"),
    minWidth: wp("2.116935518052843%"),
    minHeight: hp("2.617662721644334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "flex-start"
  },
  Text_3_20: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_21: {
    width: wp("2.116935518052843%"),
    minWidth: wp("2.116935518052843%"),
    height: hp("3.5739468746497987%"),
    minHeight: hp("3.5739468746497987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.666666666666668%"),
    top: hp("67.62295081967213%")
  },
  ImageBackground_3_22: {
    width: wp("1.8145161204867892%"),
    minWidth: wp("1.8145161204867892%"),
    height: hp("3.569539909154339%"),
    minHeight: hp("3.569539909154339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11200798882378393%"),
    top: hp("0%")
  },
  View_3_23: {
    width: wp("2.116935518052843%"),
    minWidth: wp("2.116935518052843%"),
    minHeight: hp("2.617662721644334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "flex-start"
  },
  Text_3_23: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_24: {
    width: wp("2.116935518052843%"),
    minWidth: wp("2.116935518052843%"),
    height: hp("3.5739468746497987%"),
    minHeight: hp("3.5739468746497987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.666666666666668%"),
    top: hp("73.08743169398907%")
  },
  ImageBackground_3_25: {
    width: wp("1.8145161204867892%"),
    minWidth: wp("1.8145161204867892%"),
    height: hp("3.569539909154339%"),
    minHeight: hp("3.569539909154339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11200798882378393%"),
    top: hp("0%")
  },
  View_3_26: {
    width: wp("2.116935518052843%"),
    minWidth: wp("2.116935518052843%"),
    minHeight: hp("2.617662721644334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "flex-start"
  },
  Text_3_26: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_27: {
    width: wp("2.116935518052843%"),
    minWidth: wp("2.116935518052843%"),
    height: hp("3.5739468746497987%"),
    minHeight: hp("3.5739468746497987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.666666666666668%"),
    top: hp("78.55191256830601%")
  },
  ImageBackground_3_28: {
    width: wp("1.8145161204867892%"),
    minWidth: wp("1.8145161204867892%"),
    height: hp("3.569539909154339%"),
    minHeight: hp("3.569539909154339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11200798882378393%"),
    top: hp("0%")
  },
  View_3_29: {
    width: wp("2.116935518052843%"),
    minWidth: wp("2.116935518052843%"),
    minHeight: hp("2.617662721644334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "flex-start"
  },
  Text_3_29: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_30: {
    width: wp("2.116935518052843%"),
    minWidth: wp("2.116935518052843%"),
    height: hp("3.5739468746497987%"),
    minHeight: hp("3.5739468746497987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.666666666666668%"),
    top: hp("84.01639344262296%")
  },
  ImageBackground_3_31: {
    width: wp("1.8145161204867892%"),
    minWidth: wp("1.8145161204867892%"),
    height: hp("3.569539909154339%"),
    minHeight: hp("3.569539909154339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11200798882378393%"),
    top: hp("0%")
  },
  View_3_32: {
    width: wp("2.116935518052843%"),
    minWidth: wp("2.116935518052843%"),
    minHeight: hp("2.617662721644334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "flex-start"
  },
  Text_3_32: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_33: {
    width: wp("2.116935518052843%"),
    minWidth: wp("2.116935518052843%"),
    height: hp("3.5739468746497987%"),
    minHeight: hp("3.5739468746497987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.666666666666668%"),
    top: hp("89.48087431693989%")
  },
  ImageBackground_3_34: {
    width: wp("1.8145161204867892%"),
    minWidth: wp("1.8145161204867892%"),
    height: hp("3.569539909154339%"),
    minHeight: hp("3.569539909154339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11200798882378393%"),
    top: hp("0%")
  },
  View_3_35: {
    width: wp("2.116935518052843%"),
    minWidth: wp("2.116935518052843%"),
    minHeight: hp("2.617662721644334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "flex-start"
  },
  Text_3_35: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_36: {
    width: wp("2.116935518052843%"),
    minWidth: wp("2.116935518052843%"),
    height: hp("3.5739468746497987%"),
    minHeight: hp("3.5739468746497987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.666666666666668%"),
    top: hp("94.94535519125684%")
  },
  ImageBackground_3_37: {
    width: wp("1.8145161204867892%"),
    minWidth: wp("1.8145161204867892%"),
    height: hp("3.569539909154339%"),
    minHeight: hp("3.569539909154339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11200798882378393%"),
    top: hp("0%")
  },
  View_3_38: {
    width: wp("2.116935518052843%"),
    minWidth: wp("2.116935518052843%"),
    minHeight: hp("2.617662721644334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054556%"),
    justifyContent: "flex-start"
  },
  Text_3_38: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_39: {
    width: wp("2.116935518052843%"),
    minWidth: wp("2.116935518052843%"),
    height: hp("3.5739468746497987%"),
    minHeight: hp("3.5739468746497987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.666666666666668%"),
    top: hp("100.40983606557377%")
  },
  ImageBackground_3_40: {
    width: wp("1.8145161204867892%"),
    minWidth: wp("1.8145161204867892%"),
    height: hp("3.569539909154339%"),
    minHeight: hp("3.569539909154339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11200798882378393%"),
    top: hp("0%")
  },
  View_3_41: {
    width: wp("2.116935518052843%"),
    minWidth: wp("2.116935518052843%"),
    minHeight: hp("2.617662721644334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054556%"),
    justifyContent: "flex-start"
  },
  Text_3_41: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_42: {
    width: wp("2.116935518052843%"),
    minWidth: wp("2.116935518052843%"),
    height: hp("3.5739468746497987%"),
    minHeight: hp("3.5739468746497987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.666666666666668%"),
    top: hp("105.87431693989072%")
  },
  ImageBackground_3_43: {
    width: wp("1.8145161204867892%"),
    minWidth: wp("1.8145161204867892%"),
    height: hp("3.569539909154339%"),
    minHeight: hp("3.569539909154339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11200798882378393%"),
    top: hp("0%")
  },
  View_3_44: {
    width: wp("2.116935518052843%"),
    minWidth: wp("2.116935518052843%"),
    minHeight: hp("2.617662721644334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054556%"),
    justifyContent: "flex-start"
  },
  Text_3_44: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_45: {
    width: wp("2.116935518052843%"),
    minWidth: wp("2.116935518052843%"),
    height: hp("3.5739468746497987%"),
    minHeight: hp("3.5739468746497987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.666666666666668%"),
    top: hp("111.33879781420765%")
  },
  ImageBackground_3_46: {
    width: wp("1.8145161204867892%"),
    minWidth: wp("1.8145161204867892%"),
    height: hp("3.569539909154339%"),
    minHeight: hp("3.569539909154339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11200798882378393%"),
    top: hp("0%")
  },
  View_3_47: {
    width: wp("2.116935518052843%"),
    minWidth: wp("2.116935518052843%"),
    minHeight: hp("2.617662721644334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "flex-start"
  },
  Text_3_47: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_48: {
    width: wp("2.116935518052843%"),
    minWidth: wp("2.116935518052843%"),
    height: hp("3.5739468746497987%"),
    minHeight: hp("3.5739468746497987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.59722222222222%"),
    top: hp("116.80327868852459%")
  },
  ImageBackground_3_49: {
    width: wp("1.8145161204867892%"),
    minWidth: wp("1.8145161204867892%"),
    height: hp("3.569539909154339%"),
    minHeight: hp("3.569539909154339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18145243326823035%"),
    top: hp("0%")
  },
  View_3_50: {
    width: wp("2.116935518052843%"),
    minWidth: wp("2.116935518052843%"),
    minHeight: hp("2.617662721644334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.956284153005484%"),
    justifyContent: "flex-start"
  },
  Text_3_50: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_51: {
    width: wp("2.116935518052843%"),
    minWidth: wp("2.116935518052843%"),
    height: hp("3.5739468746497987%"),
    minHeight: hp("3.5739468746497987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.666666666666668%"),
    top: hp("122.26775956284153%")
  },
  ImageBackground_3_52: {
    width: wp("1.8145161204867892%"),
    minWidth: wp("1.8145161204867892%"),
    height: hp("3.569539909154339%"),
    minHeight: hp("3.569539909154339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11200798882378393%"),
    top: hp("0%")
  },
  View_3_53: {
    width: wp("2.116935518052843%"),
    minWidth: wp("2.116935518052843%"),
    minHeight: hp("2.617662721644334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054556%"),
    justifyContent: "flex-start"
  },
  Text_3_53: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_54: {
    width: wp("2.116935518052843%"),
    minWidth: wp("2.116935518052843%"),
    height: hp("3.5739468746497987%"),
    minHeight: hp("3.5739468746497987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.666666666666668%"),
    top: hp("127.73224043715847%")
  },
  ImageBackground_3_55: {
    width: wp("1.8145161204867892%"),
    minWidth: wp("1.8145161204867892%"),
    height: hp("3.569539909154339%"),
    minHeight: hp("3.569539909154339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11200798882378393%"),
    top: hp("0%")
  },
  View_3_56: {
    width: wp("2.116935518052843%"),
    minWidth: wp("2.116935518052843%"),
    minHeight: hp("2.617662721644334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054556%"),
    justifyContent: "flex-start"
  },
  Text_3_56: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_57: {
    width: wp("2.116935518052843%"),
    minWidth: wp("2.116935518052843%"),
    height: hp("3.5739468746497987%"),
    minHeight: hp("3.5739468746497987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.666666666666668%"),
    top: hp("133.19672131147541%")
  },
  ImageBackground_3_58: {
    width: wp("1.8145161204867892%"),
    minWidth: wp("1.8145161204867892%"),
    height: hp("3.569539909154339%"),
    minHeight: hp("3.569539909154339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11200798882378393%"),
    top: hp("0%")
  },
  View_3_59: {
    width: wp("2.116935518052843%"),
    minWidth: wp("2.116935518052843%"),
    minHeight: hp("2.617662721644334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "flex-start"
  },
  Text_3_59: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_10: {
    width: wp("9.930555555555555%"),
    minWidth: wp("9.930555555555555%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.666666666666664%"),
    top: hp("46.994535519125684%"),
    justifyContent: "flex-start"
  },
  Text_2_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_11: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.27777777777778%"),
    top: hp("46.994535519125684%"),
    justifyContent: "flex-start"
  },
  Text_2_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_12: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.05555555555556%"),
    top: hp("46.994535519125684%"),
    justifyContent: "flex-start"
  },
  Text_2_12: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_13: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.70833333333333%"),
    top: hp("46.994535519125684%"),
    justifyContent: "flex-start"
  },
  Text_2_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_14: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.48611111111111%"),
    top: hp("46.994535519125684%"),
    justifyContent: "flex-start"
  },
  Text_2_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.704918032786885%"),
    justifyContent: "flex-start"
  },
  Text_2_2: {
    color: "rgba(85, 133, 181, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_2_30: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.76502732240437%"),
    justifyContent: "flex-start"
  },
  Text_2_30: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_32: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.80874316939891%"),
    justifyContent: "flex-start"
  },
  Text_2_32: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_35: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("50.81967213114754%"),
    justifyContent: "flex-start"
  },
  Text_2_35: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_31: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.775956284153008%"),
    justifyContent: "flex-start"
  },
  Text_2_31: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_33: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32.78688524590164%"),
    justifyContent: "flex-start"
  },
  Text_2_33: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_34: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.79781420765027%"),
    justifyContent: "flex-start"
  },
  Text_2_34: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_25: {
    width: wp("10.972222222222221%"),
    minWidth: wp("10.972222222222221%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.25%"),
    top: hp("3.9617486338797816%"),
    justifyContent: "flex-start"
  },
  Text_2_25: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_27: {
    width: wp("10.972222222222221%"),
    minWidth: wp("10.972222222222221%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.916666666666664%"),
    top: hp("3.9617486338797816%"),
    justifyContent: "flex-start"
  },
  Text_2_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_3: {
    width: wp("17.98611111111111%"),
    minWidth: wp("17.98611111111111%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.22222222222223%"),
    top: hp("2.185792349726776%"),
    resizeMode: "cover"
  },
  ImageBackground_2_5: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.69444444444444%"),
    top: hp("1.7759562841530054%")
  },
  ImageBackground_2_19: {
    width: wp("6.736111111111111%"),
    minWidth: wp("6.736111111111111%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2916666666666665%"),
    top: hp("2.0491803278688523%"),
    resizeMode: "cover"
  },
  View_2_26: {
    width: wp("10.972222222222221%"),
    minWidth: wp("10.972222222222221%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.25%"),
    top: hp("0%"),
    backgroundColor: "rgba(6, 170, 226, 1)"
  },
  ImageBackground_2_70: {
    width: wp("7.361111111111112%"),
    minWidth: wp("7.361111111111112%"),
    height: hp("14.48087431693989%"),
    minHeight: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.027777777777779%"),
    top: hp("23.224043715846996%")
  },
  ImageBackground_2_41: {
    width: wp("88.81944444444444%"),
    minWidth: wp("88.81944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.180555555555555%"),
    top: hp("55.73770491803278%")
  },
  ImageBackground_2_42: {
    width: wp("88.81944444444444%"),
    minWidth: wp("88.81944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.180555555555555%"),
    top: hp("61.20218579234973%")
  },
  ImageBackground_2_43: {
    width: wp("88.81944444444444%"),
    minWidth: wp("88.81944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.180555555555555%"),
    top: hp("66.66666666666666%")
  },
  ImageBackground_2_44: {
    width: wp("88.81944444444444%"),
    minWidth: wp("88.81944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.180555555555555%"),
    top: hp("72.1311475409836%")
  },
  ImageBackground_2_45: {
    width: wp("88.81944444444444%"),
    minWidth: wp("88.81944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.180555555555555%"),
    top: hp("77.59562841530054%")
  },
  ImageBackground_2_46: {
    width: wp("88.81944444444444%"),
    minWidth: wp("88.81944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.180555555555555%"),
    top: hp("83.06010928961749%")
  },
  ImageBackground_2_47: {
    width: wp("88.81944444444444%"),
    minWidth: wp("88.81944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.180555555555555%"),
    top: hp("88.52459016393442%")
  },
  ImageBackground_2_48: {
    width: wp("88.81944444444444%"),
    minWidth: wp("88.81944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.180555555555555%"),
    top: hp("93.98907103825137%")
  },
  ImageBackground_2_49: {
    width: wp("88.81944444444444%"),
    minWidth: wp("88.81944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.180555555555555%"),
    top: hp("99.4535519125683%")
  },
  ImageBackground_2_50: {
    width: wp("88.81944444444444%"),
    minWidth: wp("88.81944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.180555555555555%"),
    top: hp("104.91803278688525%")
  },
  ImageBackground_2_51: {
    width: wp("88.81944444444444%"),
    minWidth: wp("88.81944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.180555555555555%"),
    top: hp("110.38251366120218%")
  },
  ImageBackground_2_52: {
    width: wp("88.81944444444444%"),
    minWidth: wp("88.81944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.180555555555555%"),
    top: hp("115.84699453551912%")
  },
  ImageBackground_2_53: {
    width: wp("88.81944444444444%"),
    minWidth: wp("88.81944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.180555555555555%"),
    top: hp("121.31147540983606%")
  },
  ImageBackground_2_54: {
    width: wp("88.81944444444444%"),
    minWidth: wp("88.81944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.180555555555555%"),
    top: hp("126.77595628415301%")
  },
  ImageBackground_2_55: {
    width: wp("88.81944444444444%"),
    minWidth: wp("88.81944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.180555555555555%"),
    top: hp("132.24043715846994%")
  },
  ImageBackground_2_80: {
    width: wp("88.81944444444444%"),
    minWidth: wp("88.81944444444444%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.180555555555555%"),
    top: hp("137.70491803278688%")
  },
  ImageBackground_2_67: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.65277777777777%"),
    top: hp("14.48087431693989%")
  },
  ImageBackground_3_61: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.97222222222223%"),
    top: hp("3.551912568306011%")
  },
  ImageBackground_2_68: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.74999999999999%"),
    top: hp("14.48087431693989%")
  },
  ImageBackground_3_62: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68055555555556%"),
    top: hp("52.322404371584696%")
  },
  ImageBackground_3_145: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("52.322404371584696%")
  },
  ImageBackground_3_209: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.04166666666667%"),
    top: hp("52.322404371584696%")
  },
  ImageBackground_3_82: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68055555555556%"),
    top: hp("74.4535519125683%")
  },
  ImageBackground_3_146: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("74.4535519125683%")
  },
  ImageBackground_3_210: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.04166666666667%"),
    top: hp("74.4535519125683%")
  },
  ImageBackground_3_102: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68055555555556%"),
    top: hp("101.50273224043715%")
  },
  ImageBackground_3_147: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("101.50273224043715%")
  },
  ImageBackground_3_211: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.04166666666667%"),
    top: hp("101.50273224043715%")
  },
  ImageBackground_3_122: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68055555555556%"),
    top: hp("129.23497267759564%")
  },
  ImageBackground_3_148: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("129.23497267759564%")
  },
  ImageBackground_3_212: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.04166666666667%"),
    top: hp("129.23497267759564%")
  },
  ImageBackground_3_118: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68055555555556%"),
    top: hp("123.63387978142077%")
  },
  ImageBackground_3_149: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("123.63387978142077%")
  },
  ImageBackground_3_213: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.04166666666667%"),
    top: hp("123.63387978142077%")
  },
  ImageBackground_3_70: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68055555555556%"),
    top: hp("58.060109289617486%")
  },
  ImageBackground_3_150: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("58.060109289617486%")
  },
  ImageBackground_3_214: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.04166666666667%"),
    top: hp("58.060109289617486%")
  },
  ImageBackground_3_86: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68055555555556%"),
    top: hp("79.78142076502732%")
  },
  ImageBackground_3_151: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("79.78142076502732%")
  },
  ImageBackground_3_215: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.04166666666667%"),
    top: hp("79.78142076502732%")
  },
  ImageBackground_3_106: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68055555555556%"),
    top: hp("107.10382513661203%")
  },
  ImageBackground_3_152: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("107.10382513661203%")
  },
  ImageBackground_3_216: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.04166666666667%"),
    top: hp("107.10382513661203%")
  },
  ImageBackground_3_90: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68055555555556%"),
    top: hp("85.24590163934425%")
  },
  ImageBackground_3_153: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("85.24590163934425%")
  },
  ImageBackground_3_217: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.04166666666667%"),
    top: hp("85.24590163934425%")
  },
  ImageBackground_3_126: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68055555555556%"),
    top: hp("134.56284153005464%")
  },
  ImageBackground_3_154: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("134.56284153005464%")
  },
  ImageBackground_3_218: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.04166666666667%"),
    top: hp("134.56284153005464%")
  },
  ImageBackground_3_94: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68055555555556%"),
    top: hp("90.7103825136612%")
  },
  ImageBackground_3_155: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("90.7103825136612%")
  },
  ImageBackground_3_219: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.04166666666667%"),
    top: hp("90.7103825136612%")
  },
  ImageBackground_3_110: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68055555555556%"),
    top: hp("112.56830601092895%")
  },
  ImageBackground_3_156: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("112.56830601092895%")
  },
  ImageBackground_3_220: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.04166666666667%"),
    top: hp("112.56830601092895%")
  },
  ImageBackground_3_98: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68055555555556%"),
    top: hp("96.44808743169399%")
  },
  ImageBackground_3_157: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("96.44808743169399%")
  },
  ImageBackground_3_221: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.04166666666667%"),
    top: hp("96.44808743169399%")
  },
  ImageBackground_3_78: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68055555555556%"),
    top: hp("68.85245901639344%")
  },
  ImageBackground_3_158: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("68.85245901639344%")
  },
  ImageBackground_3_222: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.04166666666667%"),
    top: hp("68.85245901639344%")
  },
  ImageBackground_3_74: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68055555555556%"),
    top: hp("63.52459016393443%")
  },
  ImageBackground_3_159: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("63.52459016393443%")
  },
  ImageBackground_3_223: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.04166666666667%"),
    top: hp("63.52459016393443%")
  },
  ImageBackground_3_114: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68055555555556%"),
    top: hp("118.0327868852459%")
  },
  ImageBackground_3_160: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("118.0327868852459%")
  },
  ImageBackground_3_224: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.04166666666667%"),
    top: hp("118.0327868852459%")
  },
  View_3_65: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68055555555556%"),
    top: hp("52.322404371584696%"),
    backgroundColor: "rgba(220, 150, 13, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_161: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("52.322404371584696%"),
    backgroundColor: "rgba(85, 133, 181, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_225: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.04166666666667%"),
    top: hp("52.322404371584696%"),
    backgroundColor: "rgba(83, 168, 182, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_83: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68055555555556%"),
    top: hp("74.4535519125683%"),
    backgroundColor: "rgba(220, 150, 13, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_162: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("74.4535519125683%"),
    backgroundColor: "rgba(85, 133, 181, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_226: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.04166666666667%"),
    top: hp("74.4535519125683%"),
    backgroundColor: "rgba(83, 168, 182, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_103: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68055555555556%"),
    top: hp("101.50273224043715%"),
    backgroundColor: "rgba(220, 150, 13, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_163: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("101.50273224043715%"),
    backgroundColor: "rgba(85, 133, 181, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_227: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.04166666666667%"),
    top: hp("101.50273224043715%"),
    backgroundColor: "rgba(83, 168, 182, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_123: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68055555555556%"),
    top: hp("129.23497267759564%"),
    backgroundColor: "rgba(220, 150, 13, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_164: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("129.23497267759564%"),
    backgroundColor: "rgba(85, 133, 181, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_228: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.04166666666667%"),
    top: hp("129.23497267759564%"),
    backgroundColor: "rgba(83, 168, 182, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_119: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68055555555556%"),
    top: hp("123.63387978142077%"),
    backgroundColor: "rgba(220, 150, 13, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_165: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("123.63387978142077%"),
    backgroundColor: "rgba(85, 133, 181, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_229: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.04166666666667%"),
    top: hp("123.63387978142077%"),
    backgroundColor: "rgba(83, 168, 182, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_71: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68055555555556%"),
    top: hp("58.060109289617486%"),
    backgroundColor: "rgba(220, 150, 13, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_166: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("58.060109289617486%"),
    backgroundColor: "rgba(85, 133, 181, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_230: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.04166666666667%"),
    top: hp("58.060109289617486%"),
    backgroundColor: "rgba(83, 168, 182, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_87: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68055555555556%"),
    top: hp("79.78142076502732%"),
    backgroundColor: "rgba(220, 150, 13, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_167: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("79.78142076502732%"),
    backgroundColor: "rgba(85, 133, 181, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_231: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.04166666666667%"),
    top: hp("79.78142076502732%"),
    backgroundColor: "rgba(83, 168, 182, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_107: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68055555555556%"),
    top: hp("107.10382513661203%"),
    backgroundColor: "rgba(220, 150, 13, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_168: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("107.10382513661203%"),
    backgroundColor: "rgba(85, 133, 181, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_232: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.04166666666667%"),
    top: hp("107.10382513661203%"),
    backgroundColor: "rgba(83, 168, 182, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_91: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68055555555556%"),
    top: hp("85.24590163934425%"),
    backgroundColor: "rgba(220, 150, 13, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_169: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("85.24590163934425%"),
    backgroundColor: "rgba(85, 133, 181, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_233: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.04166666666667%"),
    top: hp("85.24590163934425%"),
    backgroundColor: "rgba(83, 168, 182, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_127: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68055555555556%"),
    top: hp("134.56284153005464%"),
    backgroundColor: "rgba(220, 150, 13, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_170: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("134.56284153005464%"),
    backgroundColor: "rgba(85, 133, 181, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_234: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.04166666666667%"),
    top: hp("134.56284153005464%"),
    backgroundColor: "rgba(83, 168, 182, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_95: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68055555555556%"),
    top: hp("90.7103825136612%"),
    backgroundColor: "rgba(220, 150, 13, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_171: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("90.7103825136612%"),
    backgroundColor: "rgba(85, 133, 181, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_235: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.04166666666667%"),
    top: hp("90.7103825136612%"),
    backgroundColor: "rgba(83, 168, 182, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_111: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68055555555556%"),
    top: hp("112.56830601092895%"),
    backgroundColor: "rgba(220, 150, 13, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_172: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("112.56830601092895%"),
    backgroundColor: "rgba(85, 133, 181, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_236: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.04166666666667%"),
    top: hp("112.56830601092895%"),
    backgroundColor: "rgba(83, 168, 182, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_99: {
    width: wp("3.6111111111111107%"),
    minWidth: wp("3.6111111111111107%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68055555555556%"),
    top: hp("96.44808743169399%"),
    backgroundColor: "rgba(220, 50, 13, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_173: {
    width: wp("3.6111111111111107%"),
    minWidth: wp("3.6111111111111107%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("96.44808743169399%"),
    backgroundColor: "rgba(220, 50, 13, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_237: {
    width: wp("3.6111111111111107%"),
    minWidth: wp("3.6111111111111107%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.04166666666667%"),
    top: hp("96.44808743169399%"),
    backgroundColor: "rgba(220, 50, 13, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_79: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68055555555556%"),
    top: hp("68.85245901639344%"),
    backgroundColor: "rgba(220, 150, 13, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_174: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("68.85245901639344%"),
    backgroundColor: "rgba(85, 133, 181, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_238: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.04166666666667%"),
    top: hp("68.85245901639344%"),
    backgroundColor: "rgba(83, 168, 182, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_75: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68055555555556%"),
    top: hp("63.52459016393443%"),
    backgroundColor: "rgba(220, 50, 13, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_175: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("63.52459016393443%"),
    backgroundColor: "rgba(220, 50, 13, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_239: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.04166666666667%"),
    top: hp("63.52459016393443%"),
    backgroundColor: "rgba(220, 50, 13, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_115: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68055555555556%"),
    top: hp("118.0327868852459%"),
    backgroundColor: "rgba(220, 50, 13, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_176: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("118.0327868852459%"),
    backgroundColor: "rgba(220, 50, 13, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_240: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.04166666666667%"),
    top: hp("118.0327868852459%"),
    backgroundColor: "rgba(220, 50, 13, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_3_66: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.93055555555556%"),
    top: hp("52.322404371584696%"),
    backgroundColor: "rgba(220, 149, 13, 1)"
  },
  View_3_177: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.26388888888889%"),
    top: hp("52.322404371584696%"),
    backgroundColor: "rgba(85, 133, 181, 1)"
  },
  View_3_241: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.29166666666667%"),
    top: hp("52.322404371584696%"),
    backgroundColor: "rgba(83, 168, 182, 1)"
  },
  View_3_84: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.93055555555556%"),
    top: hp("74.4535519125683%"),
    backgroundColor: "rgba(220, 149, 13, 1)"
  },
  View_3_178: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.26388888888889%"),
    top: hp("74.4535519125683%"),
    backgroundColor: "rgba(85, 133, 181, 1)"
  },
  View_3_242: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.29166666666667%"),
    top: hp("74.4535519125683%"),
    backgroundColor: "rgba(83, 168, 182, 1)"
  },
  View_3_104: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.93055555555556%"),
    top: hp("101.50273224043715%"),
    backgroundColor: "rgba(220, 149, 13, 1)"
  },
  View_3_179: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.26388888888889%"),
    top: hp("101.50273224043715%"),
    backgroundColor: "rgba(85, 133, 181, 1)"
  },
  View_3_243: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.29166666666667%"),
    top: hp("101.50273224043715%"),
    backgroundColor: "rgba(83, 168, 182, 1)"
  },
  View_3_124: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.93055555555556%"),
    top: hp("129.23497267759564%"),
    backgroundColor: "rgba(220, 149, 13, 1)"
  },
  View_3_180: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.26388888888889%"),
    top: hp("129.23497267759564%"),
    backgroundColor: "rgba(85, 133, 181, 1)"
  },
  View_3_244: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.29166666666667%"),
    top: hp("129.23497267759564%"),
    backgroundColor: "rgba(83, 168, 182, 1)"
  },
  View_3_120: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.93055555555556%"),
    top: hp("123.63387978142077%"),
    backgroundColor: "rgba(220, 149, 13, 1)"
  },
  View_3_181: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.26388888888889%"),
    top: hp("123.63387978142077%"),
    backgroundColor: "rgba(85, 133, 181, 1)"
  },
  View_3_245: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.29166666666667%"),
    top: hp("123.63387978142077%"),
    backgroundColor: "rgba(83, 168, 182, 1)"
  },
  View_3_72: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.40277777777778%"),
    top: hp("58.060109289617486%"),
    backgroundColor: "rgba(220, 149, 13, 1)"
  },
  View_3_182: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.73611111111111%"),
    top: hp("58.060109289617486%"),
    backgroundColor: "rgba(85, 133, 181, 1)"
  },
  View_3_246: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.76388888888889%"),
    top: hp("58.060109289617486%"),
    backgroundColor: "rgba(83, 168, 182, 1)"
  },
  View_3_88: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.40277777777778%"),
    top: hp("79.78142076502732%"),
    backgroundColor: "rgba(220, 149, 13, 1)"
  },
  View_3_183: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.73611111111111%"),
    top: hp("79.78142076502732%"),
    backgroundColor: "rgba(85, 133, 181, 1)"
  },
  View_3_247: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.76388888888889%"),
    top: hp("79.78142076502732%"),
    backgroundColor: "rgba(83, 168, 182, 1)"
  },
  View_3_108: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.40277777777778%"),
    top: hp("107.10382513661203%"),
    backgroundColor: "rgba(220, 149, 13, 1)"
  },
  View_3_184: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.73611111111111%"),
    top: hp("107.10382513661203%"),
    backgroundColor: "rgba(85, 133, 181, 1)"
  },
  View_3_248: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.76388888888889%"),
    top: hp("107.10382513661203%"),
    backgroundColor: "rgba(83, 168, 182, 1)"
  },
  View_3_92: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.40277777777778%"),
    top: hp("85.24590163934425%"),
    backgroundColor: "rgba(220, 149, 13, 1)"
  },
  View_3_185: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.91666666666667%"),
    top: hp("85.24590163934425%"),
    backgroundColor: "rgba(85, 133, 181, 1)"
  },
  View_3_249: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.76388888888889%"),
    top: hp("85.24590163934425%"),
    backgroundColor: "rgba(83, 168, 182, 1)"
  },
  View_3_128: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.40277777777778%"),
    top: hp("134.56284153005464%"),
    backgroundColor: "rgba(220, 149, 13, 1)"
  },
  View_3_186: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.73611111111111%"),
    top: hp("134.56284153005464%"),
    backgroundColor: "rgba(85, 133, 181, 1)"
  },
  View_3_250: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.76388888888889%"),
    top: hp("134.56284153005464%"),
    backgroundColor: "rgba(83, 168, 182, 1)"
  },
  View_3_96: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.40277777777778%"),
    top: hp("90.7103825136612%"),
    backgroundColor: "rgba(220, 149, 13, 1)"
  },
  View_3_187: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.73611111111111%"),
    top: hp("90.7103825136612%"),
    backgroundColor: "rgba(85, 133, 181, 1)"
  },
  View_3_251: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.76388888888889%"),
    top: hp("90.7103825136612%"),
    backgroundColor: "rgba(83, 168, 182, 1)"
  },
  View_3_112: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.40277777777778%"),
    top: hp("112.56830601092895%"),
    backgroundColor: "rgba(220, 149, 13, 1)"
  },
  View_3_188: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.73611111111111%"),
    top: hp("112.56830601092895%"),
    backgroundColor: "rgba(85, 133, 181, 1)"
  },
  View_3_252: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.76388888888889%"),
    top: hp("112.56830601092895%"),
    backgroundColor: "rgba(83, 168, 182, 1)"
  },
  View_3_100: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.486111111111114%"),
    top: hp("96.44808743169399%"),
    backgroundColor: "rgba(220, 50, 13, 1)"
  },
  View_3_189: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.81944444444444%"),
    top: hp("96.44808743169399%"),
    backgroundColor: "rgba(220, 50, 13, 1)"
  },
  View_3_253: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.84722222222221%"),
    top: hp("96.44808743169399%"),
    backgroundColor: "rgba(220, 50, 13, 1)"
  },
  View_3_80: {
    width: wp("3.2638888888888893%"),
    minWidth: wp("3.2638888888888893%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.13888888888889%"),
    top: hp("68.85245901639344%"),
    backgroundColor: "rgba(220, 149, 13, 1)"
  },
  View_3_190: {
    width: wp("3.2638888888888893%"),
    minWidth: wp("3.2638888888888893%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.47222222222223%"),
    top: hp("68.85245901639344%"),
    backgroundColor: "rgba(85, 133, 181, 1)"
  },
  View_3_254: {
    width: wp("3.2638888888888893%"),
    minWidth: wp("3.2638888888888893%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.5%"),
    top: hp("68.85245901639344%"),
    backgroundColor: "rgba(83, 168, 182, 1)"
  },
  View_3_76: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.291666666666664%"),
    top: hp("63.52459016393443%"),
    backgroundColor: "rgba(220, 50, 13, 1)"
  },
  View_3_191: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.625%"),
    top: hp("63.52459016393443%"),
    backgroundColor: "rgba(220, 50, 13, 1)"
  },
  View_3_255: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.65277777777779%"),
    top: hp("63.52459016393443%"),
    backgroundColor: "rgba(220, 50, 13, 1)"
  },
  View_3_116: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.291666666666664%"),
    top: hp("118.0327868852459%"),
    backgroundColor: "rgba(220, 50, 13, 1)"
  },
  View_3_192: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.625%"),
    top: hp("118.0327868852459%"),
    backgroundColor: "rgba(220, 50, 13, 1)"
  },
  View_3_256: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.65277777777779%"),
    top: hp("118.0327868852459%"),
    backgroundColor: "rgba(220, 50, 13, 1)"
  },
  View_3_257: {
    width: wp("3.888888888888889%"),
    minWidth: wp("3.888888888888889%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.58333333333333%"),
    top: hp("52.18579234972678%"),
    backgroundColor: "rgba(255, 220, 37, 1)"
  },
  View_3_265: {
    width: wp("3.888888888888889%"),
    minWidth: wp("3.888888888888889%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.58333333333333%"),
    top: hp("73.90710382513662%"),
    backgroundColor: "rgba(255, 220, 37, 1)"
  },
  View_3_276: {
    width: wp("3.888888888888889%"),
    minWidth: wp("3.888888888888889%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.58333333333333%"),
    top: hp("96.03825136612022%"),
    backgroundColor: "rgba(255, 220, 37, 1)"
  },
  View_3_264: {
    width: wp("3.888888888888889%"),
    minWidth: wp("3.888888888888889%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.58333333333333%"),
    top: hp("68.85245901639344%"),
    backgroundColor: "rgba(74, 80, 73, 1)"
  },
  View_3_266: {
    width: wp("3.888888888888889%"),
    minWidth: wp("3.888888888888889%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.58333333333333%"),
    top: hp("90.57377049180327%"),
    backgroundColor: "rgba(74, 80, 73, 1)"
  },
  View_3_277: {
    width: wp("3.888888888888889%"),
    minWidth: wp("3.888888888888889%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.58333333333333%"),
    top: hp("112.70491803278688%"),
    backgroundColor: "rgba(74, 80, 73, 1)"
  },
  View_3_258: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.93055555555556%"),
    top: hp("57.650273224043715%"),
    backgroundColor: "rgba(255, 220, 37, 1)"
  },
  View_3_267: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.93055555555556%"),
    top: hp("79.37158469945356%"),
    backgroundColor: "rgba(255, 220, 37, 1)"
  },
  View_3_278: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.93055555555556%"),
    top: hp("101.50273224043715%"),
    backgroundColor: "rgba(255, 220, 37, 1)"
  },
  View_3_304: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.93055555555556%"),
    top: hp("129.0983606557377%"),
    backgroundColor: "rgba(255, 220, 37, 1)"
  },
  View_3_282: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.93055555555556%"),
    top: hp("117.75956284153007%"),
    backgroundColor: "rgba(255, 220, 37, 1)"
  },
  View_3_260: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.93055555555556%"),
    top: hp("63.114754098360656%"),
    backgroundColor: "rgba(82, 219, 59, 1)"
  },
  View_3_268: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.93055555555556%"),
    top: hp("84.8360655737705%"),
    backgroundColor: "rgba(82, 219, 59, 1)"
  },
  View_3_279: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.93055555555556%"),
    top: hp("106.9672131147541%"),
    backgroundColor: "rgba(82, 219, 59, 1)"
  },
  View_3_305: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.93055555555556%"),
    top: hp("134.56284153005464%"),
    backgroundColor: "rgba(82, 219, 59, 1)"
  },
  View_3_259: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.59722222222223%"),
    top: hp("57.650273224043715%"),
    backgroundColor: "rgba(82, 219, 59, 1)"
  },
  View_3_269: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.59722222222223%"),
    top: hp("79.37158469945356%"),
    backgroundColor: "rgba(82, 219, 59, 1)"
  },
  View_3_280: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.59722222222223%"),
    top: hp("101.50273224043715%"),
    backgroundColor: "rgba(82, 219, 59, 1)"
  },
  View_3_306: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.59722222222223%"),
    top: hp("129.0983606557377%"),
    backgroundColor: "rgba(82, 219, 59, 1)"
  },
  View_3_283: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.59722222222223%"),
    top: hp("117.75956284153007%"),
    backgroundColor: "rgba(82, 219, 59, 1)"
  },
  View_3_285: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.93055555555556%"),
    top: hp("123.49726775956285%"),
    backgroundColor: "rgba(82, 219, 59, 1)"
  },
  View_3_261: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.59722222222223%"),
    top: hp("63.114754098360656%"),
    backgroundColor: "rgba(74, 80, 73, 1)"
  },
  View_3_270: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.59722222222223%"),
    top: hp("84.8360655737705%"),
    backgroundColor: "rgba(74, 80, 73, 1)"
  },
  View_3_281: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.59722222222223%"),
    top: hp("106.9672131147541%"),
    backgroundColor: "rgba(74, 80, 73, 1)"
  },
  View_3_307: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.59722222222223%"),
    top: hp("134.56284153005464%"),
    backgroundColor: "rgba(74, 80, 73, 1)"
  },
  ImageBackground_4_3: {
    width: wp("0.9722222222222222%"),
    height: hp("1.7759562841530054%"),
    top: hp("33.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.26388888888889%")
  },
  ImageBackground_4_5: {
    width: wp("0.9722222222222222%"),
    height: hp("1.639344262295082%"),
    top: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.26388888888889%")
  },
  ImageBackground_4_6: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.652777777777779%"),
    top: hp("54.37158469945356%")
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
