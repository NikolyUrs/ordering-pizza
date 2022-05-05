import React from "react"
import ContentLoader from "react-content-loader"

const LoadedBlock = () => (
    <div className="pizza-block">
        <ContentLoader
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"

        >
            <circle cx="117" cy="117" r="117" />
            <rect x="0" y="290" rx="10" ry="10" width="248" height="75" />
            <rect x="0" y="248" rx="5" ry="5" width="248" height="29" />
            <rect x="0" y="377" rx="6" ry="6" width="90" height="29" />
            <rect x="125" y="371" rx="20" ry="20" width="120" height="45" />
        </ContentLoader>
    </div>
)

export default LoadedBlock;