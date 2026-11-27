import { BrandPopoverPanel, UserPopoverPanel } from "@/components/PopoverPanel"
import { ThemeButton } from "@/components/ThemeButton"
import { AntdLayout } from "@adminui-dev/antd-layout"
import { menuData } from "./menuData"
import { layoutConfig } from "./layout.config"

/**
 * =========
 *  layout
 * =========
 * The most essential component
 *
 * @returns
 */
export default function layout(){
    return(
        <>
            <AntdLayout layoutConfig={layoutConfig} menuData={menuData}>
                <AntdLayout.BrandPopoverContent>
                    <BrandPopoverPanel />
                </AntdLayout.BrandPopoverContent>
                <AntdLayout.AvatarPopoverContent>
                    <UserPopoverPanel />
                </AntdLayout.AvatarPopoverContent>
                <AntdLayout.HeaderToolbarExtra>
                    <ThemeButton />
                </AntdLayout.HeaderToolbarExtra>
            </AntdLayout>
        </>
    )
}
