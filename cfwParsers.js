parsers: # array
  - url: https://api.sub-200.club/link/1pcmnzIgacRZ1UYY?clash=3
    code: |
      module.exports.parse = async (raw, { axios, yaml, notify, console }, { name, url, interval, selected }) => {
        const obj = yaml.parse(raw)
        console.log(obj.rules)
        console.log(obj)

        for(var key in obj){
          console.log(key)
        }
        obj['proxy-groups'].unshift({name: '🌏 openai', type: 'select', proxies: ['DIRECT','🇦🇷 阿根廷S01',]})
        console.log(obj['proxy-groups'])
        obj.rules.unshift('DOMAIN-SUFFIX,openai.com,🌏 openai')
        return yaml.stringify(obj)
      }
