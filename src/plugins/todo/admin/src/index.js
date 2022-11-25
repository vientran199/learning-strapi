import { prefixPluginTranslations } from '@strapi/helper-plugin';
import pluginPkg from '../../package.json';
import pluginId from './pluginId';
import Initializer from './components/Initializer';
import PluginIcon from './components/PluginIcon';

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    app.addMenuLink({
      to: `/plugins/${pluginId}`,
      icon: PluginIcon,
      intlLabel: {
        id: `${pluginId}.plugin.name`,
        defaultMessage: name,
      },
      Component: async () => {
        const component = await import(/* webpackChunkName: "[request]" */ './pages/App');

        return component;
      },
      permissions: [
        // Uncomment to set the permissions of the plugin here
        // {
        //   action: '', // the action name should be plugin::plugin-name.actionType
        //   subject: null,
        // },
      ],
    });
    app.addMenuLink({
      to: '/ttt',
      icon: PluginIcon,
      intlLabel: {
        id: `${pluginId}.plugin.name`,
        defaultMessage: name,
      },
      Component: async () => {
        return <div></div>
      }
    })
    app.registerPlugin({
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
      injectionZones: {
        homePage: {
          right: []
        }
      }
    });
    // app.registerPlugin({
    //   // ...
    //   injectionZones: {
    //     homePage: {
    //       right: []
    //     }
    //   }
    // });
  },

  bootstrap(app) {
    app.getPlugin('todo').injectComponent('homePage', 'right', {
      name: 'my-other-plugin-component',
      Component: () => 'This component is injected',
    });

    app.injectContentManagerComponent('editView', 'informations', {
      name: 'my-plugin-my-compo',
      Component: () => 'my-compo-informations',
    });
    app.injectContentManagerComponent('editView', 'right-links', {
      name: 'my-plugin-my-compo3',
      Component: () => 'my-compo-right-links',
    });
    app.injectContentManagerComponent('listView', 'actions', {
      name: 'my-plugin-my-compo1',
      Component: () => 'my-compo-listview-actions',
    });
    app.injectContentManagerComponent('listView', 'deleteModalAdditionalInfos', {
      name: 'my-plugin-my-compo2',
      Component: () => 'my-compo-listview-deleteModalAdditionalInfos',
    });
  },
  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(
          /* webpackChunkName: "translation-[request]" */ `./translations/${locale}.json`
        )
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
