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
      <View style={styles.View_4_8} />
      <View style={styles.View_4_9} />
      <View style={styles.View_4_10} />
      <View style={styles.View_4_11} />
      <View style={styles.View_4_12} />
      <View style={styles.View_4_13} />
      <View style={styles.View_4_14} />
      <View style={styles.View_4_15} />
      <View style={styles.View_4_16} />
      <View style={styles.View_4_17} />
      <View style={styles.View_4_18} />
      <View style={styles.View_4_19} />
      <View style={styles.View_4_20} />
      <View style={styles.View_4_21} />
      <View style={styles.View_4_22}>
        <Text style={styles.Text_4_22}>Web Development</Text>
      </View>
      <View style={styles.View_4_23}>
        <Text style={styles.Text_4_23}>
          Instructor Name   emails@codingdojo.com (241) 563-1809
        </Text>
      </View>
      <View style={styles.View_4_24}>
        <Text style={styles.Text_4_24}>Dec 13th, 2020 - March 11th, 2021</Text>
      </View>
      <View style={styles.View_4_25}>
        <Text style={styles.Text_4_25}>Saudi Arabia - Riyadh</Text>
      </View>
      <View style={styles.View_4_26}>
        <Text style={styles.Text_4_26}>Amreet Walters</Text>
      </View>
      <View style={styles.View_4_27}>
        <Text style={styles.Text_4_27}>Student Search </Text>
      </View>
      <View style={styles.View_4_28}>
        <Text style={styles.Text_4_28}>Student Name</Text>
      </View>
      <View style={styles.View_4_29}>
        <Text style={styles.Text_4_29}>
          Wade Warren Esther Howard Cameron Williamson Brooklyn Simmons Leslie
          Alexander Jenny Wilson Guy Hawkins Robert Fox Jacob Jones Kristin
          Watson Cody Fisher Savannah Nguyen Bessie Cooper Albert Flores Ralph
          Edwards Ronald Richards Darlene Robertson Annette Black Floyd Miles
          Dianne Russell Devon Lane Darrell Steward Marvin McKinney Jerome Bell
          Courtney Henry Theresa Webb
        </Text>
      </View>
      <View style={styles.View_4_30}>
        <Text style={styles.Text_4_30}>Attendance %</Text>
      </View>
      <View style={styles.View_4_31}>
        <Text style={styles.Text_4_31}>76%</Text>
      </View>
      <View style={styles.View_4_32}>
        <Text style={styles.Text_4_32}>76%</Text>
      </View>
      <View style={styles.View_4_33}>
        <Text style={styles.Text_4_33}>76%</Text>
      </View>
      <View style={styles.View_4_34}>
        <Text style={styles.Text_4_34}>2/10</Text>
      </View>
      <View style={styles.View_4_35}>
        <Text style={styles.Text_4_35}>2/10</Text>
      </View>
      <View style={styles.View_4_36}>
        <Text style={styles.Text_4_36}>2/10</Text>
      </View>
      <View style={styles.View_4_37}>
        <Text style={styles.Text_4_37}>2/10</Text>
      </View>
      <View style={styles.View_4_38}>
        <Text style={styles.Text_4_38}>2/10</Text>
      </View>
      <View style={styles.View_4_39}>
        <Text style={styles.Text_4_39}>4/10</Text>
      </View>
      <View style={styles.View_4_40}>
        <Text style={styles.Text_4_40}>5/10</Text>
      </View>
      <View style={styles.View_4_41}>
        <Text style={styles.Text_4_41}>5/10</Text>
      </View>
      <View style={styles.View_4_42}>
        <Text style={styles.Text_4_42}>5/10</Text>
      </View>
      <View style={styles.View_4_43}>
        <Text style={styles.Text_4_43}>5/10</Text>
      </View>
      <View style={styles.View_4_44}>
        <Text style={styles.Text_4_44}>5/10</Text>
      </View>
      <View style={styles.View_4_45}>
        <Text style={styles.Text_4_45}>5/10</Text>
      </View>
      <View style={styles.View_4_46}>
        <Text style={styles.Text_4_46}>5/10</Text>
      </View>
      <View style={styles.View_4_47}>
        <Text style={styles.Text_4_47}>5/10</Text>
      </View>
      <View style={styles.View_4_48}>
        <Text style={styles.Text_4_48}>6/10</Text>
      </View>
      <View style={styles.View_4_49}>
        <Text style={styles.Text_4_49}>6/10</Text>
      </View>
      <View style={styles.View_4_50}>
        <Text style={styles.Text_4_50}>76%</Text>
      </View>
      <View style={styles.View_4_51}>
        <Text style={styles.Text_4_51}>76%</Text>
      </View>
      <View style={styles.View_4_52}>
        <Text style={styles.Text_4_52}>76%</Text>
      </View>
      <View style={styles.View_4_53}>
        <Text style={styles.Text_4_53}>76%</Text>
      </View>
      <View style={styles.View_4_54}>
        <Text style={styles.Text_4_54}>76%</Text>
      </View>
      <View style={styles.View_4_55}>
        <Text style={styles.Text_4_55}>76%</Text>
      </View>
      <View style={styles.View_4_56}>
        <Text style={styles.Text_4_56}>76%</Text>
      </View>
      <View style={styles.View_4_57}>
        <Text style={styles.Text_4_57}>76%</Text>
      </View>
      <View style={styles.View_4_58}>
        <Text style={styles.Text_4_58}>76%</Text>
      </View>
      <View style={styles.View_4_59}>
        <Text style={styles.Text_4_59}>76%</Text>
      </View>
      <View style={styles.View_4_60}>
        <Text style={styles.Text_4_60}>76%</Text>
      </View>
      <View style={styles.View_4_61}>
        <Text style={styles.Text_4_61}>76%</Text>
      </View>
      <View style={styles.View_4_62}>
        <Text style={styles.Text_4_62}>63%</Text>
      </View>
      <View style={styles.View_4_63}>
        <Text style={styles.Text_4_63}>63%</Text>
      </View>
      <View style={styles.View_4_64}>
        <Text style={styles.Text_4_64}>63%</Text>
      </View>
      <View style={styles.View_4_65}>
        <Text style={styles.Text_4_65}>63%</Text>
      </View>
      <View style={styles.View_4_66}>
        <Text style={styles.Text_4_66}>63%</Text>
      </View>
      <View style={styles.View_4_67}>
        <Text style={styles.Text_4_67}>63%</Text>
      </View>
      <View style={styles.View_4_68}>
        <Text style={styles.Text_4_68}>63%</Text>
      </View>
      <View style={styles.View_4_69}>
        <Text style={styles.Text_4_69}>63%</Text>
      </View>
      <View style={styles.View_4_70}>
        <Text style={styles.Text_4_70}>63%</Text>
      </View>
      <View style={styles.View_4_71}>
        <Text style={styles.Text_4_71}>58%</Text>
      </View>
      <View style={styles.View_4_72}>
        <Text style={styles.Text_4_72}>58%</Text>
      </View>
      <View style={styles.View_4_73}>
        <Text style={styles.Text_4_73}>58%</Text>
      </View>
      <View style={styles.View_4_74}>
        <Text style={styles.Text_4_74}>58%</Text>
      </View>
      <View style={styles.View_4_75}>
        <Text style={styles.Text_4_75}>58%</Text>
      </View>
      <View style={styles.View_4_76}>
        <Text style={styles.Text_4_76}>58%</Text>
      </View>
      <View style={styles.View_4_77}>
        <Text style={styles.Text_4_77}>58%</Text>
      </View>
      <View style={styles.View_4_78}>
        <Text style={styles.Text_4_78}>58%</Text>
      </View>
      <View style={styles.View_4_79}>
        <Text style={styles.Text_4_79}>58%</Text>
      </View>
      <View style={styles.View_4_80}>
        <Text style={styles.Text_4_80}>58%</Text>
      </View>
      <View style={styles.View_4_81}>
        <Text style={styles.Text_4_81}>58%</Text>
      </View>
      <View style={styles.View_4_82}>
        <Text style={styles.Text_4_82}>58%</Text>
      </View>
      <View style={styles.View_4_83}>
        <Text style={styles.Text_4_83}>29%</Text>
      </View>
      <View style={styles.View_4_84}>
        <Text style={styles.Text_4_84}>29%</Text>
      </View>
      <View style={styles.View_4_85}>
        <Text style={styles.Text_4_85}>29%</Text>
      </View>
      <View style={styles.View_4_86}>
        <Text style={styles.Text_4_86}>87%</Text>
      </View>
      <View style={styles.View_4_87}>
        <Text style={styles.Text_4_87}>87%</Text>
      </View>
      <View style={styles.View_4_88}>
        <Text style={styles.Text_4_88}>87%</Text>
      </View>
      <View style={styles.View_4_89}>
        <Text style={styles.Text_4_89}>47%</Text>
      </View>
      <View style={styles.View_4_90}>
        <Text style={styles.Text_4_90}>47%</Text>
      </View>
      <View style={styles.View_4_91}>
        <Text style={styles.Text_4_91}>47%</Text>
      </View>
      <View style={styles.View_4_92}>
        <Text style={styles.Text_4_92}>47%</Text>
      </View>
      <View style={styles.View_4_93}>
        <Text style={styles.Text_4_93}>47%</Text>
      </View>
      <View style={styles.View_4_94}>
        <Text style={styles.Text_4_94}>47%</Text>
      </View>
      <View style={styles.View_4_95}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa0/9b5c/d23deb8b33752a5feb622742be6ecab4"
          }}
          style={styles.ImageBackground_4_96}
        />
        <View style={styles.View_4_97}>
          <Text style={styles.Text_4_97}>89</Text>
        </View>
      </View>
      <View style={styles.View_4_98}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa0/9b5c/d23deb8b33752a5feb622742be6ecab4"
          }}
          style={styles.ImageBackground_4_99}
        />
        <View style={styles.View_4_100}>
          <Text style={styles.Text_4_100}>90</Text>
        </View>
      </View>
      <View style={styles.View_4_101}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa0/9b5c/d23deb8b33752a5feb622742be6ecab4"
          }}
          style={styles.ImageBackground_4_102}
        />
        <View style={styles.View_4_103}>
          <Text style={styles.Text_4_103}>78</Text>
        </View>
      </View>
      <View style={styles.View_4_104}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1acb/2e43/60e69af516593c3112e246b3f8f562a1"
          }}
          style={styles.ImageBackground_4_105}
        />
        <View style={styles.View_4_106}>
          <Text style={styles.Text_4_106}>63</Text>
        </View>
      </View>
      <View style={styles.View_4_107}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa0/9b5c/d23deb8b33752a5feb622742be6ecab4"
          }}
          style={styles.ImageBackground_4_108}
        />
        <View style={styles.View_4_109}>
          <Text style={styles.Text_4_109}>88</Text>
        </View>
      </View>
      <View style={styles.View_4_110}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa0/9b5c/d23deb8b33752a5feb622742be6ecab4"
          }}
          style={styles.ImageBackground_4_111}
        />
        <View style={styles.View_4_112}>
          <Text style={styles.Text_4_112}>75</Text>
        </View>
      </View>
      <View style={styles.View_4_113}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa0/9b5c/d23deb8b33752a5feb622742be6ecab4"
          }}
          style={styles.ImageBackground_4_114}
        />
        <View style={styles.View_4_115}>
          <Text style={styles.Text_4_115}>84</Text>
        </View>
      </View>
      <View style={styles.View_4_116}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa0/9b5c/d23deb8b33752a5feb622742be6ecab4"
          }}
          style={styles.ImageBackground_4_117}
        />
        <View style={styles.View_4_118}>
          <Text style={styles.Text_4_118}>91</Text>
        </View>
      </View>
      <View style={styles.View_4_119}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/416a/926f/04afd8993b2be53f53ad0efd81531d60"
          }}
          style={styles.ImageBackground_4_120}
        />
        <View style={styles.View_4_121}>
          <Text style={styles.Text_4_121}>24</Text>
        </View>
      </View>
      <View style={styles.View_4_122}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa0/9b5c/d23deb8b33752a5feb622742be6ecab4"
          }}
          style={styles.ImageBackground_4_123}
        />
        <View style={styles.View_4_124}>
          <Text style={styles.Text_4_124}>98</Text>
        </View>
      </View>
      <View style={styles.View_4_125}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa0/9b5c/d23deb8b33752a5feb622742be6ecab4"
          }}
          style={styles.ImageBackground_4_126}
        />
        <View style={styles.View_4_127}>
          <Text style={styles.Text_4_127}>78</Text>
        </View>
      </View>
      <View style={styles.View_4_128}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa0/9b5c/d23deb8b33752a5feb622742be6ecab4"
          }}
          style={styles.ImageBackground_4_129}
        />
        <View style={styles.View_4_130}>
          <Text style={styles.Text_4_130}>91</Text>
        </View>
      </View>
      <View style={styles.View_4_131}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/416a/926f/04afd8993b2be53f53ad0efd81531d60"
          }}
          style={styles.ImageBackground_4_132}
        />
        <View style={styles.View_4_133}>
          <Text style={styles.Text_4_133}>15</Text>
        </View>
      </View>
      <View style={styles.View_4_134}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa0/9b5c/d23deb8b33752a5feb622742be6ecab4"
          }}
          style={styles.ImageBackground_4_135}
        />
        <View style={styles.View_4_136}>
          <Text style={styles.Text_4_136}>97</Text>
        </View>
      </View>
      <View style={styles.View_4_137}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa0/9b5c/d23deb8b33752a5feb622742be6ecab4"
          }}
          style={styles.ImageBackground_4_138}
        />
        <View style={styles.View_4_139}>
          <Text style={styles.Text_4_139}>86</Text>
        </View>
      </View>
      <View style={styles.View_4_140}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa0/9b5c/d23deb8b33752a5feb622742be6ecab4"
          }}
          style={styles.ImageBackground_4_141}
        />
        <View style={styles.View_4_142}>
          <Text style={styles.Text_4_142}>75</Text>
        </View>
      </View>
      <View style={styles.View_4_143}>
        <Text style={styles.Text_4_143}>Required Assignments</Text>
      </View>
      <View style={styles.View_4_144}>
        <Text style={styles.Text_4_144}>Optional Assignments</Text>
      </View>
      <View style={styles.View_4_145}>
        <Text style={styles.Text_4_145}>Milestone Assignments</Text>
      </View>
      <View style={styles.View_4_146}>
        <Text style={styles.Text_4_146}>Belt Exams</Text>
      </View>
      <View style={styles.View_4_147}>
        <Text style={styles.Text_4_147}>Belts</Text>
      </View>
      <View style={styles.View_4_148}>
        <Text style={styles.Text_4_148}>PROGRAMS</Text>
      </View>
      <View style={styles.View_4_149}>
        <Text style={styles.Text_4_149}>Blockchain</Text>
      </View>
      <View style={styles.View_4_150}>
        <Text style={styles.Text_4_150}>UX/UI Design</Text>
      </View>
      <View style={styles.View_4_151}>
        <Text style={styles.Text_4_151}>Web Development</Text>
      </View>
      <View style={styles.View_4_152}>
        <Text style={styles.Text_4_152}>Cybersecurity</Text>
      </View>
      <View style={styles.View_4_153}>
        <Text style={styles.Text_4_153}>Data Science</Text>
      </View>
      <View style={styles.View_4_154}>
        <Text style={styles.Text_4_154}>Project Management</Text>
      </View>
      <View style={styles.View_4_155}>
        <Text style={styles.Text_4_155}>Dashboard</Text>
      </View>
      <View style={styles.View_4_156}>
        <Text style={styles.Text_4_156}>Student Records</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/250a/6492/2e7da12e1254cc899644a70990c37a9f"
        }}
        style={styles.ImageBackground_4_157}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8315/2da5/ce25e06a5441b2e8fc39f9fbbc80b308"
        }}
        style={styles.ImageBackground_4_158}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c77/0d9c/fbabbb9c90bcb23f564279ac89272527"
        }}
        style={styles.ImageBackground_4_159}
      />
      <View style={styles.View_4_160} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5274/33ee/da409696425818f541c60fe072260f6d"
        }}
        style={styles.ImageBackground_4_161}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a6/63d3/8e362c806dae957a61b55000b462cf08"
        }}
        style={styles.ImageBackground_4_164}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a6/63d3/8e362c806dae957a61b55000b462cf08"
        }}
        style={styles.ImageBackground_4_165}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a6/63d3/8e362c806dae957a61b55000b462cf08"
        }}
        style={styles.ImageBackground_4_166}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a6/63d3/8e362c806dae957a61b55000b462cf08"
        }}
        style={styles.ImageBackground_4_167}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a6/63d3/8e362c806dae957a61b55000b462cf08"
        }}
        style={styles.ImageBackground_4_168}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a6/63d3/8e362c806dae957a61b55000b462cf08"
        }}
        style={styles.ImageBackground_4_169}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a6/63d3/8e362c806dae957a61b55000b462cf08"
        }}
        style={styles.ImageBackground_4_170}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a6/63d3/8e362c806dae957a61b55000b462cf08"
        }}
        style={styles.ImageBackground_4_171}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a6/63d3/8e362c806dae957a61b55000b462cf08"
        }}
        style={styles.ImageBackground_4_172}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a6/63d3/8e362c806dae957a61b55000b462cf08"
        }}
        style={styles.ImageBackground_4_173}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a6/63d3/8e362c806dae957a61b55000b462cf08"
        }}
        style={styles.ImageBackground_4_174}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a6/63d3/8e362c806dae957a61b55000b462cf08"
        }}
        style={styles.ImageBackground_4_175}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a6/63d3/8e362c806dae957a61b55000b462cf08"
        }}
        style={styles.ImageBackground_4_176}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a6/63d3/8e362c806dae957a61b55000b462cf08"
        }}
        style={styles.ImageBackground_4_177}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a6/63d3/8e362c806dae957a61b55000b462cf08"
        }}
        style={styles.ImageBackground_4_178}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a6/63d3/8e362c806dae957a61b55000b462cf08"
        }}
        style={styles.ImageBackground_4_179}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c783/0c4d/83ae3f62d8dc0d65b011ff97d5aae18f"
        }}
        style={styles.ImageBackground_4_180}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c783/0c4d/83ae3f62d8dc0d65b011ff97d5aae18f"
        }}
        style={styles.ImageBackground_4_181}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c783/0c4d/83ae3f62d8dc0d65b011ff97d5aae18f"
        }}
        style={styles.ImageBackground_4_182}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_183}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_184}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_185}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_186}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_187}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_188}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_189}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_190}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_191}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_192}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_193}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_194}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_195}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_196}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_197}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_198}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_199}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_200}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_201}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_202}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_203}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_204}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_205}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_206}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_207}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_208}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_209}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_210}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_211}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_212}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_213}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_214}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_215}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_216}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_217}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_218}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_219}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_220}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_221}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_222}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_223}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_224}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_225}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_226}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_227}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_228}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_229}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8613/d3ec/0ad2a2509d4926e94a3809ab195ce552"
        }}
        style={styles.ImageBackground_4_230}
      />
      <View style={styles.View_4_231} />
      <View style={styles.View_4_232} />
      <View style={styles.View_4_233} />
      <View style={styles.View_4_234} />
      <View style={styles.View_4_235} />
      <View style={styles.View_4_236} />
      <View style={styles.View_4_237} />
      <View style={styles.View_4_238} />
      <View style={styles.View_4_239} />
      <View style={styles.View_4_240} />
      <View style={styles.View_4_241} />
      <View style={styles.View_4_242} />
      <View style={styles.View_4_243} />
      <View style={styles.View_4_244} />
      <View style={styles.View_4_245} />
      <View style={styles.View_4_246} />
      <View style={styles.View_4_247} />
      <View style={styles.View_4_248} />
      <View style={styles.View_4_249} />
      <View style={styles.View_4_250} />
      <View style={styles.View_4_251} />
      <View style={styles.View_4_252} />
      <View style={styles.View_4_253} />
      <View style={styles.View_4_254} />
      <View style={styles.View_4_255} />
      <View style={styles.View_4_256} />
      <View style={styles.View_4_257} />
      <View style={styles.View_4_258} />
      <View style={styles.View_4_259} />
      <View style={styles.View_4_260} />
      <View style={styles.View_4_261} />
      <View style={styles.View_4_262} />
      <View style={styles.View_4_263} />
      <View style={styles.View_4_264} />
      <View style={styles.View_4_265} />
      <View style={styles.View_4_266} />
      <View style={styles.View_4_267} />
      <View style={styles.View_4_268} />
      <View style={styles.View_4_269} />
      <View style={styles.View_4_270} />
      <View style={styles.View_4_271} />
      <View style={styles.View_4_272} />
      <View style={styles.View_4_273} />
      <View style={styles.View_4_274} />
      <View style={styles.View_4_275} />
      <View style={styles.View_4_276} />
      <View style={styles.View_4_277} />
      <View style={styles.View_4_278} />
      <View style={styles.View_4_279} />
      <View style={styles.View_4_280} />
      <View style={styles.View_4_281} />
      <View style={styles.View_4_282} />
      <View style={styles.View_4_283} />
      <View style={styles.View_4_284} />
      <View style={styles.View_4_285} />
      <View style={styles.View_4_286} />
      <View style={styles.View_4_287} />
      <View style={styles.View_4_288} />
      <View style={styles.View_4_289} />
      <View style={styles.View_4_290} />
      <View style={styles.View_4_291} />
      <View style={styles.View_4_292} />
      <View style={styles.View_4_293} />
      <View style={styles.View_4_294} />
      <View style={styles.View_4_295} />
      <View style={styles.View_4_296} />
      <View style={styles.View_4_297} />
      <View style={styles.View_4_298} />
      <View style={styles.View_4_299} />
      <View style={styles.View_4_300} />
      <View style={styles.View_4_301} />
      <View style={styles.View_4_302} />
      <View style={styles.View_4_303} />
      <View style={styles.View_4_304} />
      <View style={styles.View_4_305} />
      <View style={styles.View_4_306} />
      <View style={styles.View_4_307} />
      <View style={styles.View_4_308} />
      <View style={styles.View_4_309} />
      <View style={styles.View_4_310} />
      <View style={styles.View_4_311} />
      <View style={styles.View_4_312} />
      <View style={styles.View_4_313} />
      <View style={styles.View_4_314} />
      <View style={styles.View_4_315} />
      <View style={styles.View_4_316} />
      <View style={styles.View_4_317} />
      <View style={styles.View_4_318} />
      <View style={styles.View_4_319} />
      <View style={styles.View_4_320} />
      <View style={styles.View_4_321} />
      <View style={styles.View_4_322} />
      <View style={styles.View_4_323} />
      <View style={styles.View_4_324} />
      <View style={styles.View_4_325} />
      <View style={styles.View_4_326} />
      <View style={styles.View_4_327} />
      <View style={styles.View_4_328} />
      <View style={styles.View_4_329} />
      <View style={styles.View_4_330} />
      <View style={styles.View_4_331} />
      <View style={styles.View_4_332} />
      <View style={styles.View_4_333} />
      <View style={styles.View_4_334} />
      <View style={styles.View_4_335} />
      <View style={styles.View_4_336} />
      <View style={styles.View_4_337} />
      <View style={styles.View_4_338} />
      <View style={styles.View_4_339} />
      <View style={styles.View_4_340} />
      <View style={styles.View_4_341} />
      <View style={styles.View_4_342} />
      <View style={styles.View_4_343} />
      <View style={styles.View_4_344} />
      <View style={styles.View_4_345} />
      <View style={styles.View_4_346} />
      <View style={styles.View_4_347} />
      <View style={styles.View_4_348} />
      <View style={styles.View_4_349} />
      <View style={styles.View_4_350} />
      <View style={styles.View_4_351} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6eb0/6377/0c040e57b359cd16e494e340d17df5dd"
        }}
        style={styles.ImageBackground_4_352}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a429/40eb/2ffad5831fe0e4f6cd1c2341ad63dcd4"
        }}
        style={styles.ImageBackground_4_353}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc72/c33f/6a9c15b8662daa8139c506b77e4384bf"
        }}
        style={styles.ImageBackground_4_354}
      />
      <View style={styles.View_4_362} />
      <View style={styles.View_12_1}>
        <View style={styles.View_4_355} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58fb/82cd/96d8c195d631eefb4975fd35196399d5"
          }}
          style={styles.ImageBackground_4_358}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7c8/877d/ab1504a01445f90112de96fecb6c9421"
          }}
          style={styles.ImageBackground_4_359}
        />
        <View style={styles.View_4_356}>
          <Text style={styles.Text_4_356}>
            Wade Warren   emails@codingdojo.com (241) 563-1809
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6eb0/6377/0c040e57b359cd16e494e340d17df5dd"
          }}
          style={styles.ImageBackground_4_360}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a429/40eb/2ffad5831fe0e4f6cd1c2341ad63dcd4"
          }}
          style={styles.ImageBackground_4_361}
        />
        <View style={styles.View_12_0}>
          <Text style={styles.Text_12_0}>Attendance per Day</Text>
        </View>
        <View style={styles.View_12_3}>
          <Text style={styles.Text_12_3}>Assignments Completed</Text>
        </View>
        <View style={styles.View_12_2}>
          <Text style={styles.Text_12_2}>Attendance %</Text>
        </View>
        <View style={styles.View_12_4}>
          <Text style={styles.Text_12_4}>Required Assignment Completion %</Text>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("139.89071038251367%") },
  View_4_8: {
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
  View_4_9: {
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
  View_4_10: {
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
  View_4_11: {
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
  View_4_12: {
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
  View_4_13: {
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
  View_4_14: {
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
  View_4_15: {
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
  View_4_16: {
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
  View_4_17: {
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
  View_4_18: {
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
  View_4_19: {
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
  View_4_20: {
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
  View_4_21: {
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
  View_4_22: {
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
  Text_4_22: {
    color: "rgba(85, 133, 181, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_23: {
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
  Text_4_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_24: {
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
  Text_4_24: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_25: {
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
  Text_4_25: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_26: {
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
  Text_4_26: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_27: {
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
  Text_4_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_28: {
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
  Text_4_28: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_29: {
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
  Text_4_29: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_30: {
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
  Text_4_30: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_31: {
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
  Text_4_31: {
    color: "rgba(220, 149, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_32: {
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
  Text_4_32: {
    color: "rgba(85, 133, 181, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_33: {
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
  Text_4_33: {
    color: "rgba(83, 168, 182, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_34: {
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
  Text_4_34: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_35: {
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
  Text_4_35: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_36: {
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
  Text_4_36: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_37: {
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
  Text_4_37: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_38: {
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
  Text_4_38: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_39: {
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
  Text_4_39: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_40: {
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
  Text_4_40: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_41: {
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
  Text_4_41: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_42: {
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
  Text_4_42: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_43: {
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
  Text_4_43: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_44: {
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
  Text_4_44: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_45: {
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
  Text_4_45: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_46: {
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
  Text_4_46: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_47: {
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
  Text_4_47: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_48: {
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
  Text_4_48: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_49: {
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
  Text_4_49: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_50: {
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
  Text_4_50: {
    color: "rgba(220, 149, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_51: {
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
  Text_4_51: {
    color: "rgba(85, 133, 181, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_52: {
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
  Text_4_52: {
    color: "rgba(83, 168, 182, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_53: {
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
  Text_4_53: {
    color: "rgba(220, 149, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_54: {
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
  Text_4_54: {
    color: "rgba(85, 133, 181, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_55: {
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
  Text_4_55: {
    color: "rgba(83, 168, 182, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_56: {
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
  Text_4_56: {
    color: "rgba(220, 149, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_57: {
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
  Text_4_57: {
    color: "rgba(85, 133, 181, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_58: {
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
  Text_4_58: {
    color: "rgba(83, 168, 182, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_59: {
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
  Text_4_59: {
    color: "rgba(220, 149, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_60: {
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
  Text_4_60: {
    color: "rgba(85, 133, 181, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_61: {
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
  Text_4_61: {
    color: "rgba(83, 168, 182, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_62: {
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
  Text_4_62: {
    color: "rgba(220, 149, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_63: {
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
  Text_4_63: {
    color: "rgba(85, 133, 181, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_64: {
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
  Text_4_64: {
    color: "rgba(83, 168, 182, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_65: {
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
  Text_4_65: {
    color: "rgba(220, 149, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_66: {
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
  Text_4_66: {
    color: "rgba(85, 133, 181, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_67: {
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
  Text_4_67: {
    color: "rgba(83, 168, 182, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_68: {
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
  Text_4_68: {
    color: "rgba(220, 149, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_69: {
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
  Text_4_69: {
    color: "rgba(85, 133, 181, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_70: {
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
  Text_4_70: {
    color: "rgba(83, 168, 182, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_71: {
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
  Text_4_71: {
    color: "rgba(220, 149, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_72: {
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
  Text_4_72: {
    color: "rgba(85, 133, 181, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_73: {
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
  Text_4_73: {
    color: "rgba(83, 168, 182, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_74: {
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
  Text_4_74: {
    color: "rgba(220, 149, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_75: {
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
  Text_4_75: {
    color: "rgba(85, 133, 181, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_76: {
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
  Text_4_76: {
    color: "rgba(83, 168, 182, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_77: {
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
  Text_4_77: {
    color: "rgba(220, 149, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_78: {
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
  Text_4_78: {
    color: "rgba(85, 133, 181, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_79: {
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
  Text_4_79: {
    color: "rgba(83, 168, 182, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_80: {
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
  Text_4_80: {
    color: "rgba(220, 149, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_81: {
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
  Text_4_81: {
    color: "rgba(85, 133, 181, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_82: {
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
  Text_4_82: {
    color: "rgba(83, 168, 182, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_83: {
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
  Text_4_83: {
    color: "rgba(220, 50, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_84: {
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
  Text_4_84: {
    color: "rgba(220, 50, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_85: {
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
  Text_4_85: {
    color: "rgba(220, 50, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_86: {
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
  Text_4_86: {
    color: "rgba(220, 149, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_87: {
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
  Text_4_87: {
    color: "rgba(85, 133, 181, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_88: {
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
  Text_4_88: {
    color: "rgba(83, 168, 182, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_89: {
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
  Text_4_89: {
    color: "rgba(220, 50, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_90: {
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
  Text_4_90: {
    color: "rgba(220, 50, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_91: {
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
  Text_4_91: {
    color: "rgba(220, 50, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_92: {
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
  Text_4_92: {
    color: "rgba(220, 50, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_93: {
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
  Text_4_93: {
    color: "rgba(220, 50, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_94: {
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
  Text_4_94: {
    color: "rgba(220, 50, 13, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_95: {
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
  ImageBackground_4_96: {
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
  View_4_97: {
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
  Text_4_97: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_98: {
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
  ImageBackground_4_99: {
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
  View_4_100: {
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
  Text_4_100: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_101: {
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
  ImageBackground_4_102: {
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
  View_4_103: {
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
  Text_4_103: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_104: {
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
  ImageBackground_4_105: {
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
  View_4_106: {
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
  Text_4_106: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_107: {
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
  ImageBackground_4_108: {
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
  View_4_109: {
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
  Text_4_109: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_110: {
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
  ImageBackground_4_111: {
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
  View_4_112: {
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
  Text_4_112: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_113: {
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
  ImageBackground_4_114: {
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
  View_4_115: {
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
  Text_4_115: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_116: {
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
  ImageBackground_4_117: {
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
  View_4_118: {
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
  Text_4_118: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_119: {
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
  ImageBackground_4_120: {
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
  View_4_121: {
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
  Text_4_121: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_122: {
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
  ImageBackground_4_123: {
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
  View_4_124: {
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
  Text_4_124: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_125: {
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
  ImageBackground_4_126: {
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
  View_4_127: {
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
  Text_4_127: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_128: {
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
  ImageBackground_4_129: {
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
  View_4_130: {
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
  Text_4_130: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_131: {
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
  ImageBackground_4_132: {
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
  View_4_133: {
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
  Text_4_133: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_134: {
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
  ImageBackground_4_135: {
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
  View_4_136: {
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
  Text_4_136: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_137: {
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
  ImageBackground_4_138: {
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
  View_4_139: {
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
  Text_4_139: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_140: {
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
  ImageBackground_4_141: {
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
  View_4_142: {
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
  Text_4_142: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_143: {
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
  Text_4_143: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_144: {
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
  Text_4_144: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_145: {
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
  Text_4_145: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_146: {
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
  Text_4_146: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_147: {
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
  Text_4_147: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_148: {
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
  Text_4_148: {
    color: "rgba(85, 133, 181, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_4_149: {
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
  Text_4_149: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_150: {
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
  Text_4_150: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_151: {
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
  Text_4_151: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_152: {
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
  Text_4_152: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_153: {
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
  Text_4_153: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_154: {
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
  Text_4_154: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_155: {
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
  Text_4_155: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_156: {
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
  Text_4_156: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_157: {
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
  ImageBackground_4_158: {
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
  ImageBackground_4_159: {
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
  View_4_160: {
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
  ImageBackground_4_161: {
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
  ImageBackground_4_164: {
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
  ImageBackground_4_165: {
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
  ImageBackground_4_166: {
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
  ImageBackground_4_167: {
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
  ImageBackground_4_168: {
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
  ImageBackground_4_169: {
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
  ImageBackground_4_170: {
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
  ImageBackground_4_171: {
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
  ImageBackground_4_172: {
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
  ImageBackground_4_173: {
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
  ImageBackground_4_174: {
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
  ImageBackground_4_175: {
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
  ImageBackground_4_176: {
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
  ImageBackground_4_177: {
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
  ImageBackground_4_178: {
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
  ImageBackground_4_179: {
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
  ImageBackground_4_180: {
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
  ImageBackground_4_181: {
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
  ImageBackground_4_182: {
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
  ImageBackground_4_183: {
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
  ImageBackground_4_184: {
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
  ImageBackground_4_185: {
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
  ImageBackground_4_186: {
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
  ImageBackground_4_187: {
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
  ImageBackground_4_188: {
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
  ImageBackground_4_189: {
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
  ImageBackground_4_190: {
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
  ImageBackground_4_191: {
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
  ImageBackground_4_192: {
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
  ImageBackground_4_193: {
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
  ImageBackground_4_194: {
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
  ImageBackground_4_195: {
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
  ImageBackground_4_196: {
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
  ImageBackground_4_197: {
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
  ImageBackground_4_198: {
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
  ImageBackground_4_199: {
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
  ImageBackground_4_200: {
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
  ImageBackground_4_201: {
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
  ImageBackground_4_202: {
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
  ImageBackground_4_203: {
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
  ImageBackground_4_204: {
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
  ImageBackground_4_205: {
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
  ImageBackground_4_206: {
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
  ImageBackground_4_207: {
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
  ImageBackground_4_208: {
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
  ImageBackground_4_209: {
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
  ImageBackground_4_210: {
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
  ImageBackground_4_211: {
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
  ImageBackground_4_212: {
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
  ImageBackground_4_213: {
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
  ImageBackground_4_214: {
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
  ImageBackground_4_215: {
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
  ImageBackground_4_216: {
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
  ImageBackground_4_217: {
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
  ImageBackground_4_218: {
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
  ImageBackground_4_219: {
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
  ImageBackground_4_220: {
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
  ImageBackground_4_221: {
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
  ImageBackground_4_222: {
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
  ImageBackground_4_223: {
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
  ImageBackground_4_224: {
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
  ImageBackground_4_225: {
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
  ImageBackground_4_226: {
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
  ImageBackground_4_227: {
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
  ImageBackground_4_228: {
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
  ImageBackground_4_229: {
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
  ImageBackground_4_230: {
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
  View_4_231: {
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
  View_4_232: {
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
  View_4_233: {
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
  View_4_234: {
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
  View_4_235: {
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
  View_4_236: {
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
  View_4_237: {
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
  View_4_238: {
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
  View_4_239: {
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
  View_4_240: {
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
  View_4_241: {
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
  View_4_242: {
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
  View_4_243: {
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
  View_4_244: {
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
  View_4_245: {
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
  View_4_246: {
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
  View_4_247: {
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
  View_4_248: {
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
  View_4_249: {
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
  View_4_250: {
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
  View_4_251: {
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
  View_4_252: {
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
  View_4_253: {
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
  View_4_254: {
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
  View_4_255: {
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
  View_4_256: {
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
  View_4_257: {
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
  View_4_258: {
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
  View_4_259: {
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
  View_4_260: {
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
  View_4_261: {
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
  View_4_262: {
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
  View_4_263: {
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
  View_4_264: {
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
  View_4_265: {
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
  View_4_266: {
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
  View_4_267: {
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
  View_4_268: {
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
  View_4_269: {
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
  View_4_270: {
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
  View_4_271: {
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
  View_4_272: {
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
  View_4_273: {
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
  View_4_274: {
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
  View_4_275: {
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
  View_4_276: {
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
  View_4_277: {
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
  View_4_278: {
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
  View_4_279: {
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
  View_4_280: {
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
  View_4_281: {
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
  View_4_282: {
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
  View_4_283: {
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
  View_4_284: {
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
  View_4_285: {
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
  View_4_286: {
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
  View_4_287: {
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
  View_4_288: {
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
  View_4_289: {
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
  View_4_290: {
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
  View_4_291: {
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
  View_4_292: {
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
  View_4_293: {
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
  View_4_294: {
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
  View_4_295: {
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
  View_4_296: {
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
  View_4_297: {
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
  View_4_298: {
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
  View_4_299: {
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
  View_4_300: {
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
  View_4_301: {
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
  View_4_302: {
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
  View_4_303: {
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
  View_4_304: {
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
  View_4_305: {
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
  View_4_306: {
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
  View_4_307: {
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
  View_4_308: {
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
  View_4_309: {
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
  View_4_310: {
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
  View_4_311: {
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
  View_4_312: {
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
  View_4_313: {
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
  View_4_314: {
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
  View_4_315: {
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
  View_4_316: {
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
  View_4_317: {
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
  View_4_318: {
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
  View_4_319: {
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
  View_4_320: {
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
  View_4_321: {
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
  View_4_322: {
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
  View_4_323: {
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
  View_4_324: {
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
  View_4_325: {
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
  View_4_326: {
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
  View_4_327: {
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
  View_4_328: {
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
  View_4_329: {
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
  View_4_330: {
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
  View_4_331: {
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
  View_4_332: {
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
  View_4_333: {
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
  View_4_334: {
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
  View_4_335: {
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
  View_4_336: {
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
  View_4_337: {
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
  View_4_338: {
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
  View_4_339: {
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
  View_4_340: {
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
  View_4_341: {
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
  View_4_342: {
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
  View_4_343: {
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
  View_4_344: {
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
  View_4_345: {
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
  View_4_346: {
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
  View_4_347: {
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
  View_4_348: {
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
  View_4_349: {
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
  View_4_350: {
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
  View_4_351: {
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
  ImageBackground_4_352: {
    width: wp("0.9722222222222222%"),
    height: hp("1.7759562841530054%"),
    top: hp("33.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.26388888888889%")
  },
  ImageBackground_4_353: {
    width: wp("0.9722222222222222%"),
    height: hp("1.639344262295082%"),
    top: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.26388888888889%")
  },
  ImageBackground_4_354: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.652777777777779%"),
    top: hp("54.37158469945356%")
  },
  View_4_362: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("139.89071038251367%"),
    minHeight: hp("139.89071038251367%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.6000000238418579
  },
  View_12_1: {
    width: wp("39.72222222222222%"),
    minWidth: wp("39.72222222222222%"),
    height: hp("93.30601092896174%"),
    minHeight: hp("93.30601092896174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.56944444444444%"),
    top: hp("13.114754098360656%")
  },
  View_4_355: {
    width: wp("39.72222222222222%"),
    minWidth: wp("39.72222222222222%"),
    height: hp("93.30601092896174%"),
    minHeight: hp("93.30601092896174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 252, 1)",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14
  },
  ImageBackground_4_358: {
    width: wp("9.23611111111111%"),
    minWidth: wp("9.23611111111111%"),
    height: hp("18.71584699453552%"),
    minHeight: hp("18.71584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.208333333333336%"),
    top: hp("3.2786885245901622%")
  },
  ImageBackground_4_359: {
    width: wp("9.23611111111111%"),
    minWidth: wp("9.23611111111111%"),
    height: hp("18.71584699453552%"),
    minHeight: hp("18.71584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.208333333333336%"),
    top: hp("3.2786885245901622%")
  },
  View_4_356: {
    width: wp("15.555555555555555%"),
    minWidth: wp("15.555555555555555%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.083333333333336%"),
    top: hp("23.770491803278688%"),
    justifyContent: "flex-start"
  },
  Text_4_356: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_360: {
    width: wp("0.9722222222222222%"),
    height: hp("1.7759562841530054%"),
    top: hp("32.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.66666666666667%")
  },
  ImageBackground_4_361: {
    width: wp("0.9722222222222222%"),
    height: hp("1.639344262295082%"),
    top: hp("28.688524590163937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.722222222222221%")
  },
  View_12_0: {
    width: wp("11.597222222222223%"),
    minWidth: wp("11.597222222222223%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.013888888888893%"),
    top: hp("37.978142076502735%"),
    justifyContent: "flex-start"
  },
  Text_12_0: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_3: {
    width: wp("14.166666666666666%"),
    minWidth: wp("14.166666666666666%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.013888888888893%"),
    top: hp("48.907103825136616%"),
    justifyContent: "flex-start"
  },
  Text_12_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_2: {
    width: wp("11.597222222222223%"),
    minWidth: wp("11.597222222222223%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.361111111111114%"),
    top: hp("37.978142076502735%"),
    justifyContent: "flex-start"
  },
  Text_12_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_4: {
    width: wp("11.597222222222223%"),
    minWidth: wp("11.597222222222223%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.361111111111114%"),
    top: hp("48.907103825136616%"),
    justifyContent: "flex-start"
  },
  Text_12_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
