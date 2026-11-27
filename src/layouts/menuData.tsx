import type { MenuData } from "@adminui-dev/antd-layout"
import { DashboardOutlined, SmileOutlined,BlockOutlined,CarryOutOutlined,ProductOutlined,DesktopOutlined,CodeOutlined,SettingOutlined } from "@ant-design/icons"

/**
 * Menu data
 * A menu corresponds to a route, and the root menu is not displayed, but it must correspond to a layout route because an item may have a layout.
 */
const menuData:MenuData = {
    name:"",
    path:"/",
    label:"Dashboard",
    icon:<DashboardOutlined />,
    children:[
        {name:"welcome",path:"welcome",label:"Welcome",icon:<SmileOutlined />},
        {name:"transaction",path:"transaction",label:"Transaction",icon:<BlockOutlined />,children:[
            {name:"order",path:"order",label:"Order",icon:<CarryOutOutlined />},
            {name:"product",path:"product",label:"Product",icon:<ProductOutlined />},
        ]},
        {name:"system",path:"system",label:"System",icon:<DesktopOutlined />,children:[
            {name:"config",path:"config",label:"Config",icon:<SettingOutlined />},
            {name:"logs",path:"logs",label:"Logs",icon:<CodeOutlined />},
        ]},
    ]
}

export { menuData }