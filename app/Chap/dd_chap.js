import React,{useContext} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { View } from 'react-native';
// import { GlobalContext } from '../appContext/globalContext'
import { GlobalContext } from '../../app/appContext/globalContext'
import { useTheme } from '@/dark_mode/hook/useTheme';

export default function DD_chap({ value, setValue }) {
  const [open, setOpen] = React.useState(false);
  const { chap, setChap } = useContext(GlobalContext);
  const { colors } = useTheme();

  return (
    <View style={{ width: 280}}> {/* 👈 Control the width here */}
    <DropDownPicker
      open={open}
      value={chap}
      items={[
        { label: 'Chap 2: View-Text_Image', value: 'C2' },
        { label: 'Chap 3', value: 'C3' },
        { label: 'Chap 4', value: 'C4' },
      ]}
      setOpen={setOpen}
      // setValue={setValue}
      setValue={setChap}
      placeholder="Select a chapter"
      style={{
        // backgroundColor: 'black',
        backgroundColor: colors.background,
        borderColor: 'gray',
        height: 50,
      }}
      textStyle={{ color: colors.text }}
      dropDownContainerStyle={{
        backgroundColor: colors.background,
        borderColor: 'gray',
        maxHeight: 180, // 👈 controls height of dropdown when expanded
      }}
      listItemLabelStyle={{ color: colors.text }}
      arrowIconStyle={{
        tintColor: colors.text,
      }}
      listMode="SCROLLVIEW" // 👈 this enables scroll and makes height work
    />

    </View>
  );
}
