import { Container, useConfigAction, useConfigState, type AvatarPosition, type LayoutTheme, type LayoutType, type Position, type Theme } from '@adminui-dev/antd-layout';
import { Divider, List, Segmented, Select, Switch, theme } from 'antd';

const {useToken} = theme

interface ConfigData {
    title:string,
    element:React.ReactNode
}
export default function(){
    const { token } = useToken()
    const { setLayoutConfig } = useConfigAction()
    const { layoutConfig } = useConfigState()

    const data:ConfigData[]=[
        {title:"Theme",element:(<Segmented options={["light","dark","system"]} defaultValue={layoutConfig.theme} value={layoutConfig.theme} onChange={(e)=>{setLayoutConfig({...layoutConfig,theme: e as Theme})}} />)},
        {title:"Layout type",element:(<Segmented options={["leftMenu","headMenu"]} defaultValue={layoutConfig.layoutType} value={layoutConfig.layoutType} onChange={(e)=>{setLayoutConfig({...layoutConfig,layoutType: e as LayoutType})}} />)},
        {title:"Large brand logo",element:(<Switch defaultChecked={layoutConfig.largeBrand} checked={layoutConfig.largeBrand} onChange={(e)=>{setLayoutConfig({...layoutConfig,largeBrand:e})}} />)},
        {title:"Aside inline",element:(<Switch defaultChecked={layoutConfig.asideMenuInline} checked={layoutConfig.asideMenuInline} onChange={(e)=>{setLayoutConfig({...layoutConfig,asideMenuInline:e})}} />)},
        {title:"Collapsed position",element:(<Segmented options={["top","center","bottom"]} defaultValue={layoutConfig.collapsedPosition} value={layoutConfig.collapsedPosition} onChange={(e)=>{setLayoutConfig({...layoutConfig,collapsedPosition: e as Position})}} />)},
        {title:"Avatar position",element:(<Segmented options={["rightTop","leftBottom","none"]} defaultValue={layoutConfig.avatarPosition} value={layoutConfig.avatarPosition} onChange={(e)=>{setLayoutConfig({...layoutConfig,avatarPosition: e as AvatarPosition})}} />)},
    ]

    return(
        <Container mode='panel'>
            <List
                size="small"
                header={<div style={{paddingInline:token.padding,fontWeight:"600"}}>🗼 This is just the basic configuration</div>}
                footer={<div style={{color:token.colorTextSecondary,paddingInline:token.padding}}>More configurations are available 👉 <a href='https://github.com/zhouwenqi/adminui-antd-layout' target='_blank'>here</a> </div>}
                bordered={false}
                dataSource={data}
                renderItem={(item) => <List.Item><ConfigItem data={item} /></List.Item>}
                />
        </Container>
    )
}
const itemStyles:React.CSSProperties = {
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    width:"100%",
    gap:"10px"
}
function ConfigItem(props:{data:ConfigData}){
    const {data} = props
    return(
        <div style={itemStyles}>
            <span>{data.title}</span>
            <div>{data.element}</div>
        </div>
    )
}