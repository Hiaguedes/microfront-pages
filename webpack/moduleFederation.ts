import { container } from "webpack"; 

const { ModuleFederationPlugin } = container;

const moduleFederationConfig =  new ModuleFederationPlugin(({
            name: 'pages',
            filename: 'remote.js',
            exposes: {
                './routes': './src/routes/index.tsx',
                './pages': './src/pages/index.tsx'
            }
        }))
    


// const moduleFederationConfig = new container.ModuleFederationPlugin({

// })

export default moduleFederationConfig