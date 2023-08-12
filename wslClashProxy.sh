export http_proxy="http://$(cat /etc/resolv.conf | tail -n 1 | cut -d ' ' -f 2):7890" && export {https,all,no}_proxy=$http_proxy && export {HTTP,HTTPS,ALL,NO}_PROXY=$http_proxy
