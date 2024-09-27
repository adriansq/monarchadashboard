import { ThemedTitleV2, ThemedLayoutV2 } from "@refinedev/antd"
import Header from "./header"

const Layout = ({ children } : React.PropsWithChildren) => {
  return (
    <ThemedLayoutV2
        Header={Header}
        Title={(titleProps) => <ThemedTitleV2 {...titleProps} text="Monarcha Admin"/>}
    >
        {children}
    </ThemedLayoutV2>
  )
}

export default Layout