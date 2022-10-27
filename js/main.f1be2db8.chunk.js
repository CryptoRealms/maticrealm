(this.webpackJsonpfrontend = this.webpackJsonpfrontend || []).push([
    [0], {
        130: function (e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"denominator_","type":"uint256"},{"internalType":"address","name":"manager_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"ref","type":"address"}],"name":"addCrystals","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"collectMoney","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getChefs","outputs":[{"internalType":"uint8[5]","name":"","type":"uint8[5]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"init","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"manager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sellTower","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalChefs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTowers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"towers","outputs":[{"internalType":"uint256","name":"crystals","type":"uint256"},{"internalType":"uint256","name":"money","type":"uint256"},{"internalType":"uint256","name":"money2","type":"uint256"},{"internalType":"uint256","name":"yield","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"hrs","type":"uint256"},{"internalType":"address","name":"ref","type":"address"},{"internalType":"uint256","name":"refs","type":"uint256"},{"internalType":"uint256","name":"refDeps","type":"uint256"},{"internalType":"uint8","name":"treasury","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"towerId","type":"uint256"}],"name":"upgradeTower","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"upgradeTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"gold","type":"uint256"}],"name":"withdrawMoney","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        278: function (e) {
            e.exports = JSON.parse('[{"inputs":[{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall3.Call[]","name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes[]","name":"returnData","type":"bytes[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bool","name":"allowFailure","type":"bool"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall3.Call3[]","name":"calls","type":"tuple[]"}],"name":"aggregate3","outputs":[{"components":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"internalType":"struct Multicall3.Result[]","name":"returnData","type":"tuple[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bool","name":"allowFailure","type":"bool"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall3.Call3Value[]","name":"calls","type":"tuple[]"}],"name":"aggregate3Value","outputs":[{"components":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"internalType":"struct Multicall3.Result[]","name":"returnData","type":"tuple[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall3.Call[]","name":"calls","type":"tuple[]"}],"name":"blockAndAggregate","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes32","name":"blockHash","type":"bytes32"},{"components":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"internalType":"struct Multicall3.Result[]","name":"returnData","type":"tuple[]"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getBasefee","outputs":[{"internalType":"uint256","name":"basefee","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getBlockHash","outputs":[{"internalType":"bytes32","name":"blockHash","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBlockNumber","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getChainId","outputs":[{"internalType":"uint256","name":"chainid","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentBlockCoinbase","outputs":[{"internalType":"address","name":"coinbase","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentBlockDifficulty","outputs":[{"internalType":"uint256","name":"difficulty","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentBlockGasLimit","outputs":[{"internalType":"uint256","name":"gaslimit","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastBlockHash","outputs":[{"internalType":"bytes32","name":"blockHash","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"requireSuccess","type":"bool"},{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall3.Call[]","name":"calls","type":"tuple[]"}],"name":"tryAggregate","outputs":[{"components":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"internalType":"struct Multicall3.Result[]","name":"returnData","type":"tuple[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bool","name":"requireSuccess","type":"bool"},{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall3.Call[]","name":"calls","type":"tuple[]"}],"name":"tryBlockAndAggregate","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes32","name":"blockHash","type":"bytes32"},{"components":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"internalType":"struct Multicall3.Result[]","name":"returnData","type":"tuple[]"}],"stateMutability":"payable","type":"function"}]')
        },
        290: function (e, t) {},
        331: function (e, t) {},
        333: function (e, t) {},
        355: function (e, t) {},
        357: function (e, t) {},
        369: function (e, t) {},
        370: function (e, t) {},
        394: function (e, t) {},
        404: function (e, t) {},
        406: function (e, t) {},
        508: function (e, t) {},
        509: function (e, t) {},
        511: function (e, t, a) {},
        512: function (e, t, a) {
            "use strict";
            a.r(t);
            var n, r, c = a(2),
                s = a.n(c),
                i = a(263),
                o = a.n(i),
                u = a(11),
                l = s.a.createContext({
                    showMessage: null,
                    showLoading: null,
                    hideLoading: null,
                    showBuyCrystals: null,
                    showSellCoins: null,
                    showAlliances: null,
                    showLanguage: null,
                    showSellKingdom: null,
                    showCastleUpgrade: null,
                    showTowerUpgrade: null
                }),
                b = a(23),
                p = a(54),
                d = a(3),
                j = ["children", "enabled"],
                m = function (e) {
                    var t = e.children,
                        a = e.enabled,
                        n = Object(p.a)(e, j);
                    return Object(d.jsx)("div", Object(b.a)(Object(b.a)({}, n), {}, {
                        className: "alert",
                        style: {
                            display: "".concat(a ? "block" : "none")
                        },
                        children: t
                    }))
                },
                h = a(0),
                f = a(8),
                O = function (e) {
                    var t = e.active,
                        a = e.setActive,
                        n = e.children,
                        r = e.modalName;
                    return Object(d.jsx)("div", {
                        className: t ? "modal active" : "modal",
                        onClick: function () {
                            return a(!1)
                        },
                        children: Object(d.jsxs)("div", {
                            className: "".concat(r, t ? " modal__content active" : " modal__content"),
                            onClick: function (e) {
                                return e.stopPropagation()
                            },
                            children: [Object(d.jsx)("div", {
                                className: "modal__close",
                                onClick: function () {
                                    return a(!1)
                                }
                            }), n]
                        })
                    })
                },
                y = ["text", "enable", "callback"],
                w = function (e) {
                    var t = e.text,
                        a = e.enable,
                        n = e.callback,
                        r = Object(p.a)(e, y);
                    return Object(d.jsx)("button", Object(b.a)(Object(b.a)({}, r), {}, {
                        className: "main-button",
                        disabled: !a,
                        onClick: n,
                        children: t
                    }))
                },
                v = a(20),
                x = 80001,
                g = 80001,
                A = (n = {}, Object(v.a)(n, x, {
                    chainId: "80001",
                    chainName: "Polygon Mainnet",
                    rpcUrls: ["https://polygon-testnet.public.blastapi.io"],
                    nativeCurrency: {
                        name: "Polygon Testnet",
                        symbol: "MATIC",
                        decimals: 18
                    },
                    blockExplorerUrls: ["https://mumbai.polygonscan.com/"]
                }), Object(v.a)(n, g, {
                     chainId: "80001",
                    chainName: "Polygon Mainnet",
                    rpcUrls: ["https://polygon-testnet.public.blastapi.io"],
                    nativeCurrency: {
                        name: "Polygon Testnet",
                        symbol: "MATIC",
                        decimals: 18
                    },
                    blockExplorerUrls: ["https://mumbai.polygonscan.com/"]
                }), n),
                N = function () {
                    var e = Object(f.a)(Object(h.a)().mark((function e(t, a) {
                        var n, r;
                        return Object(h.a)().wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!(n = window.ethereum) || !n.request) {
                                        e.next = 25;
                                        break
                                    }
                                    return r = A[t], e.prev = 3, e.next = 6, n.request({
                                        method: "wallet_switchEthereumChain",
                                        params: [{
                                            chainId: "0x".concat(Number.parseInt(t).toString(16))
                                        }]
                                    });
                                case 6:
                                case 15:
                                    return e.abrupt("return", !0);
                                case 9:
                                    if (e.prev = 9, e.t0 = e.catch(3), 4902 !== (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.code)) {
                                        e.next = 22;
                                        break
                                    }
                                    return e.prev = 12, e.next = 15, n.request({
                                        method: "wallet_addEthereumChain",
                                        params: [r]
                                    });
                                case 18:
                                    return e.prev = 18, e.t1 = e.catch(12), console.error("Failed to setup the network in Metamask ", e.t1), e.abrupt("return", !1);
                                case 22:
                                    return e.abrupt("return", !1);
                                case 23:
                                    e.next = 26;
                                    break;
                                case 25:
                                    throw "Network error: please change network";
                                case 26:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [3, 9],
                            [12, 18]
                        ])
                    })));
                    return function (t, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                C = "0x2aae96f46d11567c70a55db5f2292892052eae58",
                T = "0x71753f48ef77974a5c1b67bca9a13df8686b62d4",
                M = x,
                k = A[M].rpcUrls[0],
                S = window.location.href,
                Y = 5e-4,
                B = {
                    0: {
                        price: 0,
                        time: 24
                    },
                    1: {
                        price: 200,
                        time: 30
                    },
                    2: {
                        price: 250,
                        time: 36
                    },
                    3: {
                        price: 300,
                        time: 42
                    },
                    4: {
                        price: 400,
                        time: 48
                    }
                },
                D = {
                    0: {
                        0: {
                            price: 0,
                            revenue: 0,
                            warriors: 0
                        },
                        1: {
                            price: 40,
                            revenue: 5,
                            warriors: 1
                        },
                        2: {
                            price: 60,
                            revenue: 8,
                            warriors: 2
                        },
                        3: {
                            price: 90,
                            revenue: 12,
                            warriors: 3
                        },
                        4: {
                            price: 136,
                            revenue: 18,
                            warriors: 4
                        },
                        5: {
                            price: 204,
                            revenue: 28,
                            warriors: 5
                        },
                        6: {
                            price: 306,
                            revenue: 42,
                            warriors: 6
                        }
                    },
                    1: {
                        0: {
                            price: 0,
                            revenue: 0,
                            warriors: 0
                        },
                        1: {
                            price: 400,
                            revenue: 56,
                            warriors: 1
                        },
                        2: {
                            price: 600,
                            revenue: 85,
                            warriors: 2
                        },
                        3: {
                            price: 900,
                            revenue: 128,
                            warriors: 3
                        },
                        4: {
                            price: 1350,
                            revenue: 195,
                            warriors: 4
                        },
                        5: {
                            price: 2026,
                            revenue: 297,
                            warriors: 5
                        },
                        6: {
                            price: 3040,
                            revenue: 450,
                            warriors: 6
                        }
                    },
                    2: {
                        0: {
                            price: 0,
                            revenue: 0,
                            warriors: 0
                        },
                        1: {
                            price: 1200,
                            revenue: 179,
                            warriors: 1
                        },
                        2: {
                            price: 1800,
                            revenue: 272,
                            warriors: 2
                        },
                        3: {
                            price: 2700,
                            revenue: 413,
                            warriors: 3
                        },
                        4: {
                            price: 4050,
                            revenue: 628,
                            warriors: 4
                        },
                        5: {
                            price: 6076,
                            revenue: 954,
                            warriors: 5
                        },
                        6: {
                            price: 9114,
                            revenue: 1439,
                            warriors: 6
                        }
                    },
                    3: {
                        0: {
                            price: 0,
                            revenue: 0,
                            warriors: 0
                        },
                        1: {
                            price: 2400,
                            revenue: 382,
                            warriors: 1
                        },
                        2: {
                            price: 3600,
                            revenue: 581,
                            warriors: 2
                        },
                        3: {
                            price: 5400,
                            revenue: 882,
                            warriors: 3
                        },
                        4: {
                            price: 8100,
                            revenue: 1340,
                            warriors: 4
                        },
                        5: {
                            price: 12150,
                            revenue: 2035,
                            warriors: 5
                        },
                        6: {
                            price: 18226,
                            revenue: 3076,
                            warriors: 6
                        }
                    },
                    4: {
                        0: {
                            price: 0,
                            revenue: 0,
                            warriors: 0
                        },
                        1: {
                            price: 4e3,
                            revenue: 678,
                            warriors: 1
                        },
                        2: {
                            price: 6e3,
                            revenue: 1030,
                            warriors: 2
                        },
                        3: {
                            price: 9e3,
                            revenue: 1564,
                            warriors: 3
                        },
                        4: {
                            price: 13500,
                            revenue: 2379,
                            warriors: 4
                        },
                        5: {
                            price: 20250,
                            revenue: 3620,
                            warriors: 5
                        },
                        6: {
                            price: 30376,
                            revenue: 5506,
                            warriors: 6
                        }
                    }
                },
                U = s.a.createContext({
                    web3Modal: null,
                    web3Account: null,
                    chainId: "",
                    connected: !1,
                    address: "",
                    login: null,
                    logout: null,
                    totalInvested: 0,
                    totalChefs: 0,
                    totalTowers: 0,
                    accountTower: {},
                    balanceOf: 0,
                    currentBlockTimeStamp: 0,
                    init: !1
                }),
                I = a(6),
                V = a(7),
                R = a(130),
                Q = function () {
                    function e(t, a) {
                        Object(I.a)(this, e), this.web3 = t, this.account = a, this.instanse = new t.eth.Contract(R, C)
                    }
                    return Object(V.a)(e, [{
                        key: "addCrystals",
                        value: function () {
                            var e = Object(f.a)(Object(h.a)().mark((function e(t, a, n, r, c, s) {
                                var i, o;
                                return Object(h.a)().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.getPrice();
                                        case 2:
                                            return i = e.sent, e.next = 5, this.estimateAddCrystals(t, a);
                                        case 5:
                                            return o = e.sent, e.abrupt("return", this.instanse.methods.addCrystals(t).send({
                                                from: this.account,
                                                value: this.web3.utils.toWei("".concat(a), "ether"),
                                                gasPrice: i,
                                                gas: o
                                            }).on("transactionHash", (function () {
                                                r()
                                            })).on("error", (function (e) {
                                                n(e.message ? e.message : "Failure")
                                            })).on("receipt", (function (e) {
                                                e.status ? s() : c("Failure")
                                            })));
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function (t, a, n, r, c, s) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "withdrawMoney",
                        value: function () {
                            var e = Object(f.a)(Object(h.a)().mark((function e(t, a, n, r, c) {
                                var s, i;
                                return Object(h.a)().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.getPrice();
                                        case 2:
                                            return s = e.sent, e.next = 5, this.estimateWithdrawMoney(t);
                                        case 5:
                                            return i = e.sent, e.abrupt("return", this.instanse.methods.withdrawMoney(t).send({
                                                from: this.account,
                                                gasPrice: s,
                                                gas: i
                                            }).on("transactionHash", (function () {
                                                n()
                                            })).on("error", (function (e) {
                                                a(e.message ? e.message : "Failure")
                                            })).on("receipt", (function (e) {
                                                e.status ? c() : r("Failure")
                                            })));
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function (t, a, n, r, c) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "upgradeTreasury",
                        value: function () {
                            var e = Object(f.a)(Object(h.a)().mark((function e(t, a, n, r) {
                                var c, s;
                                return Object(h.a)().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.getPrice();
                                        case 2:
                                            return c = e.sent, e.next = 5, this.estimateUpgradeTreasury();
                                        case 5:
                                            return s = e.sent, e.abrupt("return", this.instanse.methods.upgradeTreasury().send({
                                                from: this.account,
                                                gasPrice: c,
                                                gas: s
                                            }).on("transactionHash", (function () {
                                                a()
                                            })).on("error", (function (e) {
                                                t(e.message ? e.message : "Failure")
                                            })).on("receipt", (function (e) {
                                                e.status ? r() : n("Failure")
                                            })));
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function (t, a, n, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "upgradeTower",
                        value: function () {
                            var e = Object(f.a)(Object(h.a)().mark((function e(t, a, n, r, c) {
                                var s, i;
                                return Object(h.a)().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.getPrice();
                                        case 2:
                                            return s = e.sent, e.next = 5, this.estimateUpgradeTower(t);
                                        case 5:
                                            return i = e.sent, e.abrupt("return", this.instanse.methods.upgradeTower(t).send({
                                                from: this.account,
                                                gasPrice: s,
                                                gas: i
                                            }).on("transactionHash", (function () {
                                                n()
                                            })).on("error", (function (e) {
                                                a(e.message ? e.message : "Failure")
                                            })).on("receipt", (function (e) {
                                                e.status ? c() : r("Failure")
                                            })));
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function (t, a, n, r, c) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "sellTower",
                        value: function () {
                            var e = Object(f.a)(Object(h.a)().mark((function e(t, a, n, r) {
                                var c, s;
                                return Object(h.a)().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.getPrice();
                                        case 2:
                                            return c = e.sent, e.next = 5, this.estimateSellTower();
                                        case 5:
                                            return s = e.sent, e.abrupt("return", this.instanse.methods.sellTower().send({
                                                from: this.account,
                                                gasPrice: c,
                                                gas: s
                                            }).on("transactionHash", (function () {
                                                a()
                                            })).on("error", (function (e) {
                                                t(e.message ? e.message : "Failure")
                                            })).on("receipt", (function (e) {
                                                e.status ? r() : n("Failure")
                                            })));
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function (t, a, n, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "collectMoney",
                        value: function () {
                            var e = Object(f.a)(Object(h.a)().mark((function e(t, a, n, r) {
                                var c, s;
                                return Object(h.a)().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.getPrice();
                                        case 2:
                                            return c = e.sent, e.next = 5, this.estimate\u0421ollectMoney();
                                        case 5:
                                            return s = e.sent, e.abrupt("return", this.instanse.methods.collectMoney().send({
                                                from: this.account,
                                                gasPrice: c,
                                                gas: s
                                            }).on("transactionHash", (function () {
                                                a()
                                            })).on("error", (function (e) {
                                                t(e.message ? e.message : "Failure")
                                            })).on("receipt", (function (e) {
                                                e.status ? r() : n("Failure")
                                            })));
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function (t, a, n, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getPrice",
                        value: function () {
                            var e = Object(f.a)(Object(h.a)().mark((function e() {
                                return Object(h.a)().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.web3.eth.getGasPrice();
                                        case 2:
                                            return e.abrupt("return", e.sent);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "estimateAddCrystals",
                        value: function () {
                            var e = Object(f.a)(Object(h.a)().mark((function e(t, a) {
                                var n;
                                return Object(h.a)().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.instanse.methods.addCrystals(t).estimateGas({
                                                value: this.web3.utils.toWei("".concat(a), "ether")
                                            });
                                        case 2:
                                            return n = e.sent, e.abrupt("return", Math.round(1.2 * n));
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function (t, a) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "estimateWithdrawMoney",
                        value: function () {
                            var e = Object(f.a)(Object(h.a)().mark((function e(t) {
                                var a;
                                return Object(h.a)().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.instanse.methods.withdrawMoney(t).estimateGas({
                                                from: this.account
                                            });
                                        case 2:
                                            return a = e.sent, e.abrupt("return", Math.round(1.2 * a));
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function (t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "estimateUpgradeTreasury",
                        value: function () {
                            var e = Object(f.a)(Object(h.a)().mark((function e() {
                                var t;
                                return Object(h.a)().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.instanse.methods.upgradeTreasury().estimateGas({
                                                from: this.account
                                            });
                                        case 2:
                                            return t = e.sent, e.abrupt("return", Math.round(1.2 * t));
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "estimateUpgradeTower",
                        value: function () {
                            var e = Object(f.a)(Object(h.a)().mark((function e(t) {
                                var a;
                                return Object(h.a)().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.instanse.methods.upgradeTower(t).estimateGas({
                                                from: this.account
                                            });
                                        case 2:
                                            return a = e.sent, e.abrupt("return", Math.round(1.2 * a));
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function (t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "estimateSellTower",
                        value: function () {
                            var e = Object(f.a)(Object(h.a)().mark((function e() {
                                var t;
                                return Object(h.a)().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.instanse.methods.sellTower().estimateGas({
                                                from: this.account
                                            });
                                        case 2:
                                            return t = e.sent, e.abrupt("return", Math.round(1.2 * t));
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "estimate\u0421ollectMoney",
                        value: function () {
                            var e = Object(f.a)(Object(h.a)().mark((function e() {
                                var t;
                                return Object(h.a)().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.instanse.methods.collectMoney().estimateGas({
                                                from: this.account
                                            });
                                        case 2:
                                            return t = e.sent, e.abrupt("return", Math.round(1.2 * t));
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }()
                    }]), e
                }(),
                E = 0,
                P = 1,
                F = 2,
                J = 3,
                L = 4,
                W = 5,
                H = function (e, t, a) {
                    var n = Object(c.useMemo)((function () {
                            return a ? new Q(e, t) : null
                        }), [e, t, a]),
                        r = Object(c.useCallback)(Object(f.a)(Object(h.a)().mark((function e() {
                            return Object(h.a)().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, n.getPrice();
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [e, t, a]),
                        s = function () {
                            var e = Object(f.a)(Object(h.a)().mark((function e(t, a, r, c, s, i) {
                                return Object(h.a)().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            e.t0 = t, e.next = e.t0 === E ? 3 : e.t0 === P ? 5 : e.t0 === F ? 7 : e.t0 === J ? 9 : e.t0 === L ? 11 : e.t0 === W ? 13 : 15;
                                            break;
                                        case 3:
                                            return n.addCrystals(a.ref, a.value, r, c, s, i), e.abrupt("return");
                                        case 5:
                                            return n.withdrawMoney(a.amount, r, c, s, i), e.abrupt("return");
                                        case 7:
                                            return n.upgradeTreasury(r, c, s, i), e.abrupt("return");
                                        case 9:
                                            return n.upgradeTower(a.towerId, r, c, s, i), e.abrupt("return");
                                        case 11:
                                            return n.sellTower(r, c, s, i), e.abrupt("return");
                                        case 13:
                                            return n.collectMoney(r, c, s, i), e.abrupt("return");
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function (t, a, n, r, c, s) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return {
                        esimateGas: function (e, t) {
                            switch (e) {
                                case E:
                                    return n.estimateAddCrystals(t.ref, t.value);
                                case P:
                                    return n.estimateWithdrawMoney(t.amount);
                                case F:
                                    return n.estimateUpgradeTreasury();
                                case J:
                                    return n.estimateUpgradeTower(t.towerId);
                                case L:
                                    return n.estimateSellTower();
                                case W:
                                    return n.estimate\u0421ollectMoney()
                            }
                        },
                        callMethod: s,
                        gasPrice: r
                    }
                },
                X = a(35),
                K = a.n(X),
                G = a.p + "images/coins-icon.c8d657ff.png",
                z = "data:image/png;base64,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",
                Z = function (e) {
                    var t = e.active,
                        a = e.setActive,
                        n = Object(c.useState)(!0),
                        r = Object(u.a)(n, 2),
                        s = r[0],
                        i = r[1],
                        o = Object(c.useContext)(U),
                        b = o.web3Account,
                        p = o.balanceOf,
                        j = o.address,
                        m = o.connected,
                        y = o.accountTower,
                        v = o.init,
                        x = Object(c.useContext)(l),
                        g = x.showMessage,
                        A = x.showLoading,
                        N = x.hideLoading,
                        C = x.showSellKingdom,
                        T = H(b, j, m),
                        M = T.esimateGas,
                        k = T.callMethod,
                        S = T.gasPrice;
                    Object(c.useEffect)((function () {
                        i(!0)
                    }), [t]);
                    var Y = Object(c.useCallback)(function () {
                            var e = Object(f.a)(Object(h.a)().mark((function e(t) {
                                var a, n;
                                return Object(h.a)().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, S();
                                        case 2:
                                            return a = e.sent, e.next = 5, M(P, {
                                                amount: t
                                            });
                                        case 5:
                                            return n = e.sent, e.abrupt("return", {
                                                price: a,
                                                esimated: n
                                            });
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function (t) {
                                return e.apply(this, arguments)
                            }
                        }(), [b, j, m]),
                        B = function () {
                            var e = Object(f.a)(Object(h.a)().mark((function e() {
                                var t, n, r, c, o, u;
                                return Object(h.a)().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (v) {
                                                e.next = 3;
                                                break
                                            }
                                            return g("Not init"), e.abrupt("return");
                                        case 3:
                                            if (y.money && 0 != y.money && s) {
                                                e.next = 6;
                                                break
                                            }
                                            return g("Not enough Coins"), e.abrupt("return");
                                        case 6:
                                            return i(!1), e.prev = 7, e.next = 10, Y(y.money);
                                        case 10:
                                            if (t = e.sent, n = t.price, r = t.esimated, c = new K.a(n), o = new K.a(r), u = b.utils.fromWei(c.multipliedBy(o).toFixed(), "ether"), !(p < u)) {
                                                e.next = 20;
                                                break
                                            }
                                            return g("Not enough MATIC for transaction complete."), i(!0), e.abrupt("return");
                                        case 20:
                                            k(P, {
                                                amount: y.money
                                            }, (function (e) {
                                                N(), g("".concat(e)), i(!0)
                                            }), (function () {
                                                A(), a(!1), i(!0)
                                            }), (function (e) {
                                                N(), g("".concat(e)), i(!0)
                                            }), (function () {
                                                N(), g("Success"), i(!0)
                                            })), e.next = 28;
                                            break;
                                        case 23:
                                            e.prev = 23, e.t0 = e.catch(7), console.log(e.t0), g(e.t0.message ? e.t0.message : "Failure"), i(!0);
                                        case 28:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [7, 23]
                                ])
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }();
                    return Object(d.jsxs)(O, {
                        active: t,
                        setActive: a,
                        modalName: "withdraw",
                        children: [Object(d.jsx)("p", {
                            className: "withdraw__label",
                            children: "Withdraw MATIC"
                        }), Object(d.jsxs)("p", {
                            className: "withdraw__rate",
                            children: ["0.002 MATIC for 1 ", Object(d.jsx)("span", {
                                children: Object(d.jsx)("img", {
                                    src: z
                                })
                            })]
                        }), Object(d.jsx)("div", {
                            className: "withdraw__image",
                            children: Object(d.jsx)("img", {
                                src: G,
                                alt: ""
                            })
                        }), Object(d.jsxs)("div", {
                            className: "withdraw__your-rate",
                            children: [Object(d.jsx)("span", {
                                children: "You can exchange"
                            }), Object(d.jsxs)("div", {
                                className: "withdraw__wrapper",
                                children: [Object(d.jsxs)("span", {
                                    children: [" ", "".concat(y.money ? y.money : 0), Object(d.jsx)("img", {
                                        src: z
                                    })]
                                }), Object(d.jsx)("span", {
                                    children: "for ".concat(y.money ? (2e-3 * y.money).toFixed(6) : 0, " MATIC")
                                })]
                            })]
                        }), Object(d.jsxs)("div", {
                            className: "withdraw__btns",
                            children: [Object(d.jsx)(w, {
                                style: {
                                    fontSize: "24px"
                                },
                                enable: s,
                                text: "Withdraw",
                                callback: function () {
                                    B()
                                }
                            }), Object(d.jsx)(w, {
                                style: {
                                    fontSize: "20px"
                                },
                                enable: s,
                                text: "Retreat",
                                callback: function () {
                                    a(!1), C()
                                }
                            })]
                        })]
                    })
                },
                q = a.p + "images/sell-icon.17ef4e64.png",
                _ = function (e) {
                    var t = e.active,
                        a = e.setActive,
                        n = Object(c.useState)(!0),
                        r = Object(u.a)(n, 2),
                        s = r[0],
                        i = r[1],
                        o = Object(c.useState)(!0),
                        b = Object(u.a)(o, 2),
                        p = b[0],
                        j = b[1],
                        m = Object(c.useContext)(U),
                        y = m.web3Account,
                        v = m.balanceOf,
                        x = m.address,
                        g = m.connected,
                        A = m.accountTower,
                        N = Object(c.useContext)(l),
                        C = N.showMessage,
                        T = N.showLoading,
                        M = N.hideLoading,
                        k = H(y, x, g),
                        S = k.esimateGas,
                        Y = k.callMethod,
                        B = k.gasPrice;
                    Object(c.useEffect)((function () {
                        i(!0)
                    }), [t]), Object(c.useEffect)((function () {
                        var e = A.yield ? A.yield : 0;
                        j(24 * e * 5)
                    }), [g, A]);
                    var D = Object(c.useCallback)(Object(f.a)(Object(h.a)().mark((function e() {
                            var t, a;
                            return Object(h.a)().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, B();
                                    case 2:
                                        return t = e.sent, e.next = 5, S(L, {});
                                    case 5:
                                        return a = e.sent, e.abrupt("return", {
                                            price: t,
                                            esimated: a
                                        });
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [y, x, g]),
                        I = function () {
                            var e = Object(f.a)(Object(h.a)().mark((function e() {
                                var t, n, r, c, s, o;
                                return Object(h.a)().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (g) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            if (0 != A.yield) {
                                                e.next = 5;
                                                break
                                            }
                                            return C("Not a single tower built"), e.abrupt("return");
                                        case 5:
                                            return i(!1), e.prev = 6, e.next = 9, D();
                                        case 9:
                                            if (t = e.sent, n = t.price, r = t.esimated, c = new K.a(n), s = new K.a(r), o = y.utils.fromWei(c.multipliedBy(s).toFixed(), "ether"), !(v < o)) {
                                                e.next = 19;
                                                break
                                            }
                                            return C("Not enough MATIC for transaction complete."), i(!0), e.abrupt("return");
                                        case 19:
                                            Y(L, {}, (function (e) {
                                                M(), C("".concat(e)), i(!0)
                                            }), (function () {
                                                T(), a(!1), i(!0)
                                            }), (function (e) {
                                                M(), C("".concat(e)), i(!0)
                                            }), (function () {
                                                M(), C("Success"), i(!0)
                                            })), e.next = 27;
                                            break;
                                        case 22:
                                            e.prev = 22, e.t0 = e.catch(6), console.log(e.t0), C(e.t0.message ? e.t0.message : "Failure"), i(!0);
                                        case 27:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [6, 22]
                                ])
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }();
                    return Object(d.jsxs)(O, {
                        active: t,
                        setActive: a,
                        modalName: "sell",
                        children: [Object(d.jsx)("div", {
                            className: "sell__image",
                            children: Object(d.jsx)("img", {
                                src: q
                            })
                        }), Object(d.jsxs)("p", {
                            className: "sell__text",
                            children: ["Are you sure you want", Object(d.jsx)("br", {}), " to retreat?"]
                        }), Object(d.jsxs)("p", {
                            className: "sell__info",
                            children: ["You will get ", p, " ", Object(d.jsx)("span", {
                                children: Object(d.jsx)("img", {
                                    src: z
                                })
                            }), "  but all your troops will be disbanded"]
                        }), Object(d.jsxs)("div", {
                            className: "sell__btns",
                            children: [Object(d.jsx)(w, {
                                style: {
                                    fontSize: "24px"
                                },
                                enable: s,
                                text: "Okay",
                                callback: function () {
                                    I()
                                }
                            }), Object(d.jsx)(w, {
                                style: {
                                    fontSize: "20px"
                                },
                                enable: s,
                                text: "Cancel",
                                callback: function () {
                                    a(!1)
                                }
                            })]
                        })]
                    })
                },
                $ = "data:image/png;base64,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",
                ee = function (e) {
                    var t = e.active,
                        a = e.setActive,
                        n = Object(c.useContext)(U),
                        r = n.address,
                        s = n.accountTower,
                        i = Object(c.useContext)(l).showMessage,
                        o = "".concat(S, "?p=").concat(r);
                    return Object(d.jsxs)(O, {
                        active: t,
                        setActive: a,
                        modalName: "partner",
                        children: [Object(d.jsx)("h2", {
                            className: "partner__text",
                            children: "Your invitation link"
                        }), Object(d.jsxs)("div", {
                            className: "partner__info",
                            children: [Object(d.jsx)("input", {
                                type: "text",
                                readOnly: !0,
                                className: "partner__link",
                                value: o
                            }), Object(d.jsx)(w, {
                                style: {
                                    fontSize: "32px"
                                },
                                enable: !0,
                                text: "Copy",
                                callback: function () {
                                    i("Copied"), navigator.clipboard.writeText(o)
                                }
                            })]
                        }), Object(d.jsx)("p", {
                            className: "partner__details",
                            children: "You get 8% in crystals and 4% in gold from each deposit of your ally."
                        }), Object(d.jsxs)("div", {
                            className: "partner__statistic statistic",
                            children: [Object(d.jsx)("h3", {
                                children: "Allie's statistics"
                            }), Object(d.jsxs)("div", {
                                className: "statistic__content",
                                children: [Object(d.jsxs)("div", {
                                    className: "statistic__item",
                                    children: [Object(d.jsx)("div", {
                                        className: "statistic__image",
                                        children: Object(d.jsx)("img", {
                                            src: z
                                        })
                                    }), Object(d.jsx)("p", {
                                        children: s.refDeps ? "+".concat(Math.floor(100 * s.refDeps * 4 / 100)) : "+0"
                                    })]
                                }), Object(d.jsxs)("div", {
                                    className: "statistic__item",
                                    children: [Object(d.jsx)("div", {
                                        className: "statistic__image",
                                        children: Object(d.jsx)("img", {
                                            src: $
                                        })
                                    }), Object(d.jsx)("p", {
                                        children: s.refDeps ? "+".concat(Math.floor(8 * s.refDeps / 100)) : "+0"
                                    })]
                                }), Object(d.jsxs)("div", {
                                    className: "statistic__item",
                                    children: [Object(d.jsx)("div", {
                                        className: "statistic__image",
                                        children: Object(d.jsx)("img", {
                                            src: "data:image/png;base64,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"
                                        })
                                    }), Object(d.jsx)("p", {
                                        children: s.refs ? "+".concat(s.refs) : "+0"
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                te = a(518),
                ae = function () {
                    var e = Object(te.a)(["partner"]),
                        t = Object(u.a)(e, 2),
                        a = t[0],
                        n = t[1];
                    return {
                        cookies: a,
                        setupCookies: Object(c.useCallback)((function (e) {
                            var t = new Date;
                            t.setTime(t.getTime() + 2592e6), n("partner", e, {
                                path: "/",
                                expires: t
                            })
                        }))
                    }
                },
                ne = ["active", "setActive"],
                re = function (e) {
                    var t = e.active,
                        a = e.setActive,
                        n = Object(p.a)(e, ne),
                        r = Object(c.useState)(!0),
                        s = Object(u.a)(r, 2),
                        i = s[0],
                        o = s[1],
                        j = Object(c.useContext)(U),
                        m = j.web3Account,
                        y = j.balanceOf,
                        v = j.address,
                        x = j.connected,
                        g = Object(c.useContext)(l),
                        A = g.showMessage,
                        N = g.showLoading,
                        C = g.hideLoading,
                        T = ae().cookies,
                        M = H(m, v, x),
                        k = M.esimateGas,
                        S = M.callMethod,
                        B = M.gasPrice,
                        D = Object(c.useState)(0),
                        I = Object(u.a)(D, 2),
                        V = I[0],
                        R = I[1],
                        Q = Object(c.useState)(0),
                        P = Object(u.a)(Q, 2),
                        F = P[0],
                        J = P[1],
                        L = Object(c.useState)(!1),
                        W = Object(u.a)(L, 2),
                        X = W[0],
                        G = W[1],
                        z = Object(c.useState)(!1),
                        Z = Object(u.a)(z, 2),
                        q = Z[0],
                        _ = Z[1];
                    Object(c.useEffect)((function () {
                        var e = Math.round(V / 5e-4);
                        J(e)
                    }), [q]), Object(c.useEffect)((function () {
                        o(!0)
                    }), [t]), Object(c.useEffect)((function () {
                        R(5e-4 * F)
                    }), [X]);
                    var ee = function (e, t) {
                            "" == e.target.value && (e.target.value = 0, t(0))
                        },
                        te = function () {
                            var e = Object(f.a)(Object(h.a)().mark((function e() {
                                var t, n, r, c, s, u, l;
                                return Object(h.a)().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!(V < Y) && i) {
                                                e.next = 3;
                                                break
                                            }
                                            return A("MIN DEPOSIT ".concat(Y, " MATIC")), e.abrupt("return");
                                        case 3:
                                            return o(!1), t = T.partner ? T.partner : "0x5bE7b129B26d2A226b530b609C3c8a75f684ED8b", e.prev = 5, e.next = 8, re(t);
                                        case 8:
                                            if (n = e.sent, r = n.price, c = n.esimated, s = new K.a(r), u = new K.a(c), l = m.utils.fromWei(s.multipliedBy(u).toFixed(), "ether"), !(y - l <= V)) {
                                                e.next = 18;
                                                break
                                            }
                                            return A("Not enough MATIC"), o(!0), e.abrupt("return");
                                        case 18:
                                            S(E, {
                                                ref: t,
                                                value: V
                                            }, (function (e) {
                                                C(), A("".concat(e)), o(!0)
                                            }), (function () {
                                                N(), a(!1), o(!0)
                                            }), (function (e) {
                                                C(), A("".concat(e)), o(!0)
                                            }), (function () {
                                                C(), A("Success"), o(!0)
                                            })), e.next = 26;
                                            break;
                                        case 21:
                                            e.prev = 21, e.t0 = e.catch(5), console.log(e.t0), A(e.t0.message ? e.t0.message : "Failure"), o(!0);
                                        case 26:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [5, 21]
                                ])
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }(),
                        re = Object(c.useCallback)(function () {
                            var e = Object(f.a)(Object(h.a)().mark((function e(t) {
                                var a, n;
                                return Object(h.a)().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, B();
                                        case 2:
                                            return a = e.sent, e.next = 5, k(E, {
                                                ref: t,
                                                value: "0.2"
                                            });
                                        case 5:
                                            return n = e.sent, e.abrupt("return", {
                                                price: a,
                                                esimated: n
                                            });
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function (t) {
                                return e.apply(this, arguments)
                            }
                        }(), [m, v, x]);
                    return Object(d.jsxs)(O, Object(b.a)(Object(b.a)({}, n), {}, {
                        active: t,
                        setActive: a,
                        modalName: "buy",
                        children: [Object(d.jsx)("h3", {
                            className: "buy__title",
                            children: "Buy Crystals"
                        }), Object(d.jsxs)("form", {
                            className: "buy__converter",
                            children: [Object(d.jsxs)("div", {
                                className: "buy__bnb buy__item",
                                children: [Object(d.jsxs)("label", {
                                    htmlFor: "bnb",
                                    children: [Object(d.jsx)("span", {
                                        children: "MATIC"
                                    }), Object(d.jsxs)("span", {
                                        className: "buy__balance",
                                        children: ["Balance: ", y]
                                    })]
                                }), Object(d.jsx)("input", {
                                    type: "text",
                                    name: "bnb",
                                    id: "bnb",
                                    value: V,
                                    onChange: function (e) {
                                        return function (e) {
                                            var t = RegExp("^\\d*(?:\\\\[.])?\\d*$"),
                                                a = e.target.value.replace(/,/g, ".");
                                            ("" === a || t.test(a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))) && (R(a), _(!q))
                                        }(e)
                                    },
                                    onBlur: function (e) {
                                        return ee(e, R)
                                    }
                                })]
                            }), Object(d.jsx)("div", {
                                className: "buy__image",
                                children: Object(d.jsx)("img", {
                                    src: "data:image/png;base64,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"
                                })
                            }), Object(d.jsxs)("div", {
                                className: "buy__crystal buy__item",
                                children: [Object(d.jsx)("label", {
                                    htmlFor: "crystal",
                                    children: Object(d.jsx)("span", {
                                        children: "Crystal"
                                    })
                                }), Object(d.jsx)("input", {
                                    type: "text",
                                    name: "crystal",
                                    id: "crystal",
                                    value: F / 400,
                                    onChange: function (e) {
                                        return function (e) {
                                            var t = e.target.value.replace(/[^0-9]/g, "");
                                            e.target.value = t, J(t), G(!X)
                                        }(e)
                                    },
                                    onBlur: function (e) {
                                        return ee(e, J)
                                    }
                                })]
                            })]
                        }), Object(d.jsx)("div", {
                            className: "buy__converted",
                            children: Object(d.jsxs)("p", {
                                children: [" 1 ", Object(d.jsx)("span", {
                                    children: Object(d.jsx)("img", {
                                        src: $
                                    })
                                }), " = 0,2 MATIC"]
                            })
                        }), Object(d.jsx)(w, {
                            style: {
                                fontSize: "20px"
                            },
                            enable: i,
                            text: "Buy",
                            callback: function () {
                                te()
                            }
                        })]
                    }))
                },
                ce = function (e) {
                    var t = e.active,
                        a = e.setActive,
                        n = Object(c.useState)(!0),
                        r = Object(u.a)(n, 2),
                        s = r[0],
                        i = r[1],
                        o = Object(c.useContext)(U),
                        b = o.web3Account,
                        p = o.balanceOf,
                        j = o.address,
                        m = o.connected,
                        y = o.accountTower,
                        v = o.init,
                        x = Object(c.useContext)(l),
                        g = x.showMessage,
                        A = x.showLoading,
                        N = x.hideLoading,
                        C = H(b, j, m),
                        T = C.esimateGas,
                        M = C.callMethod,
                        k = C.gasPrice,
                        S = Object(c.useState)(0),
                        Y = Object(u.a)(S, 2),
                        D = Y[0],
                        I = Y[1],
                        V = Object(c.useState)(0),
                        R = Object(u.a)(V, 2),
                        Q = R[0],
                        E = R[1],
                        P = Object(c.useState)(0),
                        J = Object(u.a)(P, 2),
                        L = J[0],
                        W = J[1];
                    Object(c.useEffect)((function () {
                        if (m && !(y.treasury >= 4)) {
                            var e = y.treasury ? y.treasury : 0,
                                t = B[e],
                                a = B[e + 1];
                            I(t.time), E(a.time - t.time), W(a.price)
                        }
                    }), [m, y]), Object(c.useEffect)((function () {
                        i(!0)
                    }), [t]);
                    var X = Object(c.useCallback)(Object(f.a)(Object(h.a)().mark((function e() {
                            var t, a;
                            return Object(h.a)().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, k();
                                    case 2:
                                        return t = e.sent, e.next = 5, T(F);
                                    case 5:
                                        return a = e.sent, e.abrupt("return", {
                                            price: t,
                                            esimated: a
                                        });
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [b, j, m]),
                        G = function () {
                            var e = Object(f.a)(Object(h.a)().mark((function e() {
                                var t, n, r, c, o, u, l;
                                return Object(h.a)().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ((y.treasury || 0 == y.treasury) && s) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            if (i(!1), t = B[y.treasury + 1], !(y.crystals < t.price && v)) {
                                                e.next = 8;
                                                break
                                            }
                                            return g("Not enough Crystals"), i(!0), e.abrupt("return");
                                        case 8:
                                            return e.prev = 8, e.next = 11, X();
                                        case 11:
                                            if (n = e.sent, r = n.price, c = n.esimated, o = new K.a(r), u = new K.a(c), l = b.utils.fromWei(o.multipliedBy(u).toFixed(), "ether"), !(p < l)) {
                                                e.next = 21;
                                                break
                                            }
                                            return g("Not enough MATIC for transaction complete."), i(!0), e.abrupt("return");
                                        case 21:
                                            M(F, {}, (function (e) {
                                                N(), g("".concat(e)), i(!0)
                                            }), (function () {
                                                A(), a(!1), i(!0)
                                            }), (function (e) {
                                                N(), g("".concat(e)), i(!0)
                                            }), (function () {
                                                N(), g("Success"), i(!0)
                                            })), e.next = 29;
                                            break;
                                        case 24:
                                            e.prev = 24, e.t0 = e.catch(8), console.log(e.t0), g(e.t0.message ? e.t0.message : "Failure"), i(!0);
                                        case 29:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [8, 24]
                                ])
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }();
                    return Object(d.jsxs)(O, {
                        active: t,
                        setActive: a,
                        modalName: "treasury",
                        children: [Object(d.jsx)("p", {
                            className: "treasury__label",
                            children: "Upgrade treasury"
                        }), Object(d.jsxs)("div", {
                            className: "treasury__your-rate",
                            children: [Object(d.jsx)("span", {
                                children: "Time until treasury fills"
                            }), Object(d.jsxs)("div", {
                                className: "treasury__wrapper",
                                children: [Object(d.jsx)("div", {
                                    className: "treasury__icon",
                                    children: Object(d.jsx)("img", {
                                        src: "data:image/png;base64,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"
                                    })
                                }), Object(d.jsxs)("p", {
                                    className: "treasury__info",
                                    children: [D, "h ", Object(d.jsxs)("span", {
                                        children: ["(+", Q, "h)"]
                                    })]
                                })]
                            })]
                        }), Object(d.jsx)("div", {
                            className: "treasury__btns",
                            children: Object(d.jsx)(w, {
                                style: {
                                    fontSize: "20px"
                                },
                                enable: s,
                                text: Object(d.jsxs)("div", {
                                    className: "button__wrapper",
                                    children: [L, Object(d.jsx)("img", {
                                        src: $
                                    })]
                                }),
                                callback: function () {
                                    G()
                                }
                            })
                        })]
                    })
                },
                se = function (e) {
                    var t = e.id,
                        a = e.active,
                        n = e.setActive,
                        r = Object(c.useState)(!0),
                        s = Object(u.a)(r, 2),
                        i = s[0],
                        o = s[1],
                        b = Object(c.useState)(0),
                        p = Object(u.a)(b, 2),
                        j = p[0],
                        m = p[1],
                        y = Object(c.useState)(0),
                        v = Object(u.a)(y, 2),
                        x = v[0],
                        g = v[1],
                        A = Object(c.useState)(0),
                        N = Object(u.a)(A, 2),
                        C = N[0],
                        T = N[1],
                        M = Object(c.useState)(0),
                        k = Object(u.a)(M, 2),
                        S = k[0],
                        Y = k[1],
                        B = Object(c.useState)(0),
                        I = Object(u.a)(B, 2),
                        V = I[0],
                        R = I[1],
                        Q = Object(c.useState)(0),
                        E = Object(u.a)(Q, 2),
                        P = E[0],
                        F = E[1],
                        L = Object(c.useState)(0),
                        W = Object(u.a)(L, 2),
                        X = W[0],
                        Z = W[1],
                        q = Object(c.useState)(0),
                        _ = Object(u.a)(q, 2),
                        ee = _[0],
                        te = _[1],
                        ae = Object(c.useContext)(U),
                        ne = ae.web3Account,
                        re = ae.balanceOf,
                        ce = ae.address,
                        se = ae.connected,
                        ie = ae.accountTower,
                        oe = (ae.init, Object(c.useContext)(l)),
                        ue = oe.showMessage,
                        le = oe.showLoading,
                        be = oe.hideLoading,
                        pe = H(ne, ce, se),
                        de = pe.esimateGas,
                        je = pe.callMethod,
                        me = pe.gasPrice;
                    Object(c.useEffect)((function () {
                        if (se && ie.chefs && void 0 != t && !(ie.chefs[t] > 5)) {
                            for (var e = ie.chefs ? ie.chefs[t] : 0, a = D[t][e], n = D[t][e + 1], r = 0, c = 0; c <= e; c++) r += D[t][c].revenue;
                            te(ie.chefs[t]), m(a.warriors), g(n.warriors - a.warriors), T(r), Y(n.revenue), R(ie.yield), F(n.revenue), Z(n.price)
                        }
                    }), [se, ie, t]), Object(c.useEffect)((function () {
                        o(!0)
                    }), [a]);
                    var he = Object(c.useCallback)(Object(f.a)(Object(h.a)().mark((function e() {
                            var a, n;
                            return Object(h.a)().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, me();
                                    case 2:
                                        return a = e.sent, e.next = 5, de(J, {
                                            towerId: t
                                        });
                                    case 5:
                                        return n = e.sent, e.abrupt("return", {
                                            price: a,
                                            esimated: n
                                        });
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [ne, ce, se, t]),
                        fe = function () {
                            var e = Object(f.a)(Object(h.a)().mark((function e() {
                                var a, r, c, s, i, u, l, b;
                                return Object(h.a)().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (se && ie.chefs && void 0 != t) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            if (o(!1), a = ie.chefs ? ie.chefs[t] : 0, r = D[t][a + 1], !(ie.crystals < r.price)) {
                                                e.next = 9;
                                                break
                                            }
                                            return ue("Not enough Crystals"), o(!0), e.abrupt("return");
                                        case 9:
                                            return e.prev = 9, e.next = 12, he();
                                        case 12:
                                            if (c = e.sent, s = c.price, i = c.esimated, u = new K.a(s), l = new K.a(i), b = ne.utils.fromWei(u.multipliedBy(l).toFixed(), "ether"), !(re < b)) {
                                                e.next = 22;
                                                break
                                            }
                                            return ue("Not enough MATIC for transaction complete."), o(!0), e.abrupt("return");
                                        case 22:
                                            je(J, {
                                                towerId: t
                                            }, (function (e) {
                                                be(), ue("".concat(e)), o(!0)
                                            }), (function () {
                                                le(), n(!1), o(!0)
                                            }), (function (e) {
                                                be(), ue("".concat(e)), o(!0)
                                            }), (function () {
                                                be(), ue("Success"), o(!0)
                                            })), e.next = 30;
                                            break;
                                        case 25:
                                            e.prev = 25, e.t0 = e.catch(9), console.log(e.t0), ue(e.t0.message ? e.t0.message : "Failure"), o(!0);
                                        case 30:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [9, 25]
                                ])
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }();
                    return Object(d.jsxs)(O, {
                        active: a,
                        setActive: n,
                        modalName: "tower-upgrade",
                        children: [Object(d.jsx)("p", {
                            className: "tower-upgrade__label",
                            children: "Upgrade Tower"
                        }), Object(d.jsxs)("p", {
                            className: "tower-upgrade__level",
                            children: ["level ", ee]
                        }), Object(d.jsxs)("div", {
                            className: "tower-upgrade__your-rate",
                            children: [Object(d.jsx)("span", {
                                children: "Warriors"
                            }), Object(d.jsxs)("div", {
                                className: "tower-upgrade__wrapper",
                                children: [Object(d.jsx)("div", {
                                    className: "tower-upgrade__icon",
                                    children: Object(d.jsx)("img", {
                                        src: "data:image/png;base64,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"
                                    })
                                }), Object(d.jsxs)("p", {
                                    className: "tower-upgrade__info",
                                    children: [j, " ", Object(d.jsxs)("span", {
                                        children: ["(+", x, ")"]
                                    })]
                                })]
                            })]
                        }), Object(d.jsxs)("div", {
                            className: "tower-upgrade__your-rate",
                            children: [Object(d.jsx)("span", {
                                children: "Profit"
                            }), Object(d.jsxs)("div", {
                                className: "tower-upgrade__wrapper",
                                children: [Object(d.jsx)("div", {
                                    className: "tower-upgrade__icon",
                                    children: Object(d.jsx)("img", {
                                        src: z
                                    })
                                }), Object(d.jsxs)("p", {
                                    className: "tower-upgrade__info",
                                    children: [C, " ", Object(d.jsxs)("span", {
                                        children: ["(+", S, ")"]
                                    })]
                                })]
                            })]
                        }), Object(d.jsxs)("div", {
                            className: "tower-upgrade__your-rate",
                            children: [Object(d.jsx)("span", {
                                children: "Total Profit"
                            }), Object(d.jsxs)("div", {
                                className: "tower-upgrade__wrapper",
                                children: [Object(d.jsx)("div", {
                                    className: "tower-upgrade__icon",
                                    children: Object(d.jsx)("img", {
                                        src: G
                                    })
                                }), Object(d.jsxs)("p", {
                                    className: "tower-upgrade__info",
                                    children: [V, " ", Object(d.jsxs)("span", {
                                        children: ["(+", P, ")"]
                                    })]
                                })]
                            })]
                        }), Object(d.jsx)("div", {
                            className: "tower-upgrade__btns",
                            children: Object(d.jsx)(w, {
                                style: {
                                    fontSize: "20px"
                                },
                                enable: i,
                                text: Object(d.jsxs)("div", {
                                    className: "button__wrapper",
                                    children: [X, Object(d.jsx)("img", {
                                        src: $
                                    })]
                                }),
                                callback: function () {
                                    fe()
                                }
                            })
                        })]
                    })
                },
                ie = function (e) {
                    var t = Object.assign({}, e);
                    return Object(d.jsxs)("div", Object(b.a)(Object(b.a)({}, t), {}, {
                        className: "lds-ring",
                        children: [Object(d.jsx)("div", {}), Object(d.jsx)("div", {}), Object(d.jsx)("div", {}), Object(d.jsx)("div", {})]
                    }))
                },
                oe = function (e) {
                    var t = e.children,
                        a = Object(c.useState)(""),
                        n = Object(u.a)(a, 2),
                        r = n[0],
                        s = n[1],
                        i = Object(c.useState)(null),
                        o = Object(u.a)(i, 2),
                        b = o[0],
                        p = o[1],
                        j = Object(c.useState)(0),
                        h = Object(u.a)(j, 2),
                        f = h[0],
                        O = h[1],
                        y = Object(c.useState)(!1),
                        w = Object(u.a)(y, 2),
                        v = w[0],
                        x = w[1],
                        g = Object(c.useState)(!1),
                        A = Object(u.a)(g, 2),
                        N = A[0],
                        C = A[1],
                        T = Object(c.useState)(!1),
                        M = Object(u.a)(T, 2),
                        k = M[0],
                        S = M[1],
                        Y = Object(c.useState)(!1),
                        B = Object(u.a)(Y, 2),
                        D = B[0],
                        U = B[1],
                        I = Object(c.useState)(!1),
                        V = Object(u.a)(I, 2),
                        R = V[0],
                        Q = V[1],
                        E = Object(c.useState)(!1),
                        P = Object(u.a)(E, 2),
                        F = (P[0], P[1]),
                        J = Object(c.useState)(!1),
                        L = Object(u.a)(J, 2),
                        W = L[0],
                        H = L[1],
                        X = Object(c.useState)(!1),
                        K = Object(u.a)(X, 2),
                        G = K[0],
                        z = K[1],
                        q = Object(c.useCallback)((function (e) {
                            null != b && clearTimeout(b);
                            var t = setTimeout((function () {
                                return p(null)
                            }), 2e3);
                            s(e), p(t)
                        }), []),
                        $ = Object(c.useCallback)((function () {
                            x(!0)
                        }), []),
                        te = Object(c.useCallback)((function () {
                            x(!1)
                        }), []),
                        ae = Object(c.useCallback)((function () {
                            S(!0)
                        }), []),
                        ne = Object(c.useCallback)((function () {
                            U(!0)
                        }), []),
                        oe = Object(c.useCallback)((function () {
                            Q(!0)
                        }), []),
                        ue = Object(c.useCallback)((function () {
                            F(!0)
                        }), []),
                        le = Object(c.useCallback)((function () {
                            H(!0)
                        }), []),
                        be = Object(c.useCallback)((function () {
                            C(!0)
                        }), []),
                        pe = Object(c.useCallback)((function (e) {
                            O(e), z(!0)
                        }), []);
                    return Object(d.jsxs)(l.Provider, {
                        value: {
                            showMessage: q,
                            showLoading: $,
                            hideLoading: te,
                            showBuyCrystals: ae,
                            showSellCoins: ne,
                            showAlliances: oe,
                            showLanguage: ue,
                            showSellKingdom: le,
                            showCastleUpgrade: be,
                            showTowerUpgrade: pe
                        },
                        children: [t, Object(d.jsx)(m, {
                            enabled: null != b,
                            children: r
                        }), Object(d.jsx)(m, {
                            enabled: v,
                            children: Object(d.jsx)(ie, {})
                        }), Object(d.jsx)(Z, {
                            active: D,
                            setActive: U
                        }), Object(d.jsx)(_, {
                            active: W,
                            setActive: H
                        }), Object(d.jsx)(ee, {
                            active: R,
                            setActive: Q
                        }), Object(d.jsx)(re, {
                            active: k,
                            setActive: S
                        }), Object(d.jsx)(ce, {
                            active: N,
                            setActive: C
                        }), Object(d.jsx)(se, {
                            active: G,
                            setActive: z,
                            id: f
                        })]
                    })
                },
                ue = a(137),
                le = a(264),
                be = a.n(le),
                pe = {
                    walletconnect: {
                        package: a(281).a,
                        options: {
                            infuraId: "a8de5a5e6c22437fbedca386f50424f0",
                            rpc: (r = {}, Object(v.a)(r, x, "https://bsc-dataseed1.binance.org"), Object(v.a)(r, g, "https://data-seed-prebsc-1-s1.binance.org:8545/"), r)
                        }
                    }
                },
                de = function () {
                    var e = Object(f.a)(Object(h.a)().mark((function e(t, a) {
                        var n;
                        return Object(h.a)().wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!a) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.next = 3, a.chainId;
                                case 3:
                                    if ((n = e.sent) === "0x".concat(Number.parseInt(t).toString(16)) || n == t) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 7, N(t, a);
                                case 7:
                                    return e.abrupt("return", e.sent);
                                case 8:
                                    return e.abrupt("return", !0);
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                je = a(73),
                me = a.n(je),
                he = function (e) {
                    try {
                        var t = new me.a(e);
                        return t.eth.extend({
                            methods: [{
                                name: "chainId",
                                call: "eth_chainId",
                                outputFormatter: t.utils.hexToNumber
                            }]
                        }), t
                    } catch (a) {
                        console.log(a)
                    }
                },
                fe = a(280),
                Oe = a(28),
                ye = a(278),
                we = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = null,
                        a = [],
                        n = {
                            reference: "KingdomCash",
                            contractAddress: C,
                            abi: R
                        },
                        r = [{
                            reference: "totalInvestedCall",
                            methodName: "totalInvested"
                        }, {
                            reference: "totalChefsCall",
                            methodName: "totalChefs"
                        }, {
                            reference: "totalTowersCall",
                            methodName: "totalTowers"
                        }, {
                            reference: "initCall",
                            methodName: "init"
                        }];
                    null != e && (a = [{
                        reference: "chefsCall",
                        methodName: "getChefs",
                        methodParameters: [e]
                    }, {
                        reference: "towersCall",
                        methodName: "towers",
                        methodParameters: [e]
                    }], t = {
                        reference: "MulticallV3",
                        contractAddress: T,
                        abi: ye,
                        calls: [{
                            reference: "balanceOf",
                            methodName: "getEthBalance",
                            methodParameters: [e]
                        }, {
                            reference: "timestamp",
                            methodName: "getCurrentBlockTimestamp"
                        }]
                    });
                    var c = [Object(b.a)(Object(b.a)({}, n), {}, {
                        calls: [].concat(r, Object(Oe.a)(a))
                    })];
                    return null != t && c.push(t), c
                },
                ve = function (e) {
                    return Ae(e) ? ge(e.returnValues[0]) : 0
                },
                xe = function (e, t) {
                    return {
                        crystals: Ae(t) ? ge(t.returnValues[0]) : 0,
                        money: Ae(t) ? ge(t.returnValues[1]) : 0,
                        money2: Ae(t) ? ge(t.returnValues[2]) : 0,
                        yield: Ae(t) ? ge(t.returnValues[3]) : 0,
                        timestamp: Ae(t) ? ge(t.returnValues[4]) : 0,
                        hrs: Ae(t) ? ge(t.returnValues[5]) : 0,
                        ref: Ae(t) ? t.returnValues[6] : "",
                        refs: Ae(t) ? ge(t.returnValues[7]) : 0,
                        refDeps: Ae(t) ? ge(t.returnValues[8]) : 0,
                        treasury: Ae(t) ? t.returnValues[9] : 0,
                        chefs: Ae(e) ? e.returnValues : [0, 0, 0, 0, 0]
                    }
                },
                ge = function (e) {
                    return new K.a(e.hex).toFixed()
                },
                Ae = function (e) {
                    return e.success
                },
                Ne = function (e) {
                    var t = e.children,
                        a = e.callback,
                        n = e.className,
                        r = void 0 === n ? "" : n;
                    return Object(d.jsx)("div", {
                        className: a ? "label clickable ".concat(r) : "label ".concat(r),
                        onClick: a,
                        children: t
                    })
                },
                Ce = ["leftImage", "label", "rightImage", "callback"],
                Te = function (e) {
                    var t = e.leftImage,
                        a = e.label,
                        n = e.rightImage,
                        r = e.callback;
                    Object(p.a)(e, Ce);
                    return Object(d.jsxs)(Ne, {
                        className: "top-bar__element",
                        children: [Object(d.jsx)("img", {
                            src: t
                        }), Object(d.jsx)("span", {
                            children: a
                        }), Object(d.jsx)("a", {
                            href: "",
                            onClick: function (e) {
                                e.preventDefault(), r()
                            },
                            children: Object(d.jsx)("img", {
                                src: n
                            })
                        })]
                    })
                },
                Me = function (e) {
                    var t = Object.assign({}, e),
                        a = Object(c.useContext)(l),
                        n = a.showMessage,
                        r = a.showBuyCrystals,
                        s = a.showSellCoins,
                        i = Object(c.useContext)(U),
                        o = i.accountTower,
                        u = i.connected;
                    return Object(d.jsx)("section", Object(b.a)(Object(b.a)({}, t), {}, {
                        id: "top-bar",
                        children: Object(d.jsx)("div", {
                            className: "top-bar",
                            children: Object(d.jsxs)("div", {
                                className: "top-bar__content",
                                children: [Object(d.jsx)(Te, {
                                    leftImage: $,
                                    label: u ? o.crystals ? o.crystals : 0 : "---",
                                    rightImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANxSURBVHgBrVZNTBNBFP5a8AClFkT+o6Yh2EQhwYMHjUaIEoSEigcPHjTRiJgYQ/05yYGDES9GwIOEcPFkUKKQJko0IdTEeDCokHgpiGiQCDUE6A9US7vOm+622112W4Evmd2Z2TfvmzfzvZkFUoQgCFWsDLCyKESxKLarsJVgDjsEfXSk4seQChF7OQIBP5wv+jH8egie+V/ILyjE8dp62E+fgSkri0w7DQbD9Q2TiUs0QkS3b17D9NRXlY21tAzt9x9KhNWM0KXlzwh9tNDD+byfE+XnWdB+5zycg23o6mhGfn4265+Ec+CZZO/Qc5aMrIoew29e8UbrjVMor7DyutVaiJYrJ3mdllbEMT1n6dBHNj0883NRgpIQELgFrI0DaaWosPLAY98ley0kRKaUt8p6pTNKRAhPAcEelYleWhhlRqS6EVYaNWcozCW2Iz+hgWzRz4g8LdJlRCp5q2AMK9qRWNVeczRWV6SFgxaJ0sKQirwlOB+/Z8kSkUVmhP3CYU17ZVpQZCp5O1qY6sqt6tHLNarIKA2UmJ6ew917fbG0OHvuInU7aM+qqBaXt319ov8AT4vLtbwuTwuKjIth6vsMzBnbYDUtAn4m7/B4ap6V0RKMZajYeYlXp37MSL3ZRLZElUxLLjy/5zHmGkLlQS+QlcMGydRPe5XhTxAF7RmCJvZOi/cJ7AT0RjD5aRie5VXk5hVIX5aIzMVKY0NDA3p6etDat4IHf/fBVswGGWRkJjaBvZ+jhBKCmcDEAZZ/ZllYBox+W0PbywX8CYVBfkW8janR5/OhqakJbrc7NqxkhwlGY/ysdj5iS2vyxf36LbBfrYgHyiQ+uxCItW02G3p7e2E288lUG8VTuos66ENzczOKi4u5Mc0sAUkuJMm+qKiI+5ERdSXcBizCTq2bseHEEV6ECbMgzCJe3Jb4N210Shyx44ox0/VQzcogoqJRQ1BcEuE0aGBJ9FMt+uVIOPXFUF2yaLlCfKshnhbw5UT3jJRJSgxYuJ0vGJL70FzsZPcZj5CnBZPx2IddwNxullu57L0Hkx+tvD9ze26C/UbJXPQg+dLmtz4Nwv1uP/DlEEZHbHA88ankrecspX+Q9dJCglLeev8gSSGp1Ov1Ct3d3UJ9fb1QWVkp1NXV8Tb1K1W3KQg6abGlRDLCTf8R/wMD3UoU35KxMwAAAABJRU5ErkJggg==",
                                    callback: function () {
                                        u ? r() : n("Please login")
                                    }
                                }), Object(d.jsxs)("div", {
                                    className: "top-bar__wrapper",
                                    children: [Object(d.jsx)(Te, {
                                        leftImage: z,
                                        label: u ? o.money ? o.money : 0 : "---",
                                        rightImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGrSURBVHgB7ZQ/SEJBHMe/L2qolIr+2vaIEKKgpTmjIQh81dAQ0hLZFtqfKYemaom0NnEWJClBKSmQbI+oUcwsBEsjNP8U/bHrTnxONfTUlt4H7u737t3d5x3vdwfIyMgQQjS0uGhJkNJIFNbR/CQyk8pgFh2cKKKNMZvNwL3vhO/Ii3jsDlJpa+/A8MgohIlJ1CsUrMvCcdwCV9jqCROtLM0jHLpCueC7urG+uSMKh6ppZWCRe8+ZF7W1NsBoGENvLw+phMP3WNtw0PWCcLt2MTU9w7qNVbTSsMh3fJgfaFoUShIxeL4DhrmRfMx+SYFBtrNGFoVuIlDW1oCvTwCZZSB3CclUdaOvZTYfhm4jYm8jkyVZUNfQjPhDDBd+L/oHUoCiiU4i+DWE5lzqE8FzH+JPL2hubRffJJnMT8u4VquF1WqFyfGMrbceqDvpJE6CjCb42fUHVg8e8fqeA1u3wGkxG9PpNPR6PQKBAMqFWq2GzWaDUqlkj0PiObPQxsCEdrsdHo8H0WgUUlGpVBAEATqdThRt03NmLA5gQlIZLN9+Efmru1FG5n/xBXog3UUhBDsCAAAAAElFTkSuQmCC",
                                        callback: function () {
                                            u ? s() : n("Please login")
                                        }
                                    }), Object(d.jsxs)("div", {
                                        className: "top-bar__rate",
                                        style: {
                                            display: "".concat(u ? "block" : "none")
                                        },
                                        children: ["+", u && o.yield ? o.yield : "", "/hour"]
                                    })]
                                })]
                            })
                        })
                    }))
                },
                ke = ["image", "text", "callback"],
                Se = function (e) {
                    var t = e.image,
                        a = e.text,
                        n = e.callback,
                        r = Object(p.a)(e, ke);
                    return Object(d.jsxs)("div", Object(b.a)(Object(b.a)({}, r), {}, {
                        className: "nav__item",
                        children: [Object(d.jsx)("div", {
                            className: "nav__icon",
                            children: Object(d.jsx)("img", {
                                src: t
                            })
                        }), Object(d.jsx)(Ne, {
                            callback: n,
                            children: a
                        })]
                    }))
                },
                Ye = a.p + "images/telegram.47739f60.png",
                Be = a.p + "images/aliance.b3599ebd.png",
                De = a.p + "images/help.d659f7ef.png",
                Ue = a.p + "images/logout.5081e481.png",
                Ie = function (e) {
                    var t = Object.assign({}, e),
                        a = Object(c.useContext)(U),
                        n = a.connected,
                        r = a.logout,
                        s = Object(c.useContext)(l),
                        i = s.showMessage,
                        o = s.showAlliances;
                    return Object(d.jsx)("section", Object(b.a)(Object(b.a)({}, t), {}, {
                        id: "sidebar",
                        children: Object(d.jsx)("div", {
                            className: "sidebar",
                            children: Object(d.jsxs)("nav", {
                                className: "sidebar__content nav",
                                children: [Object(d.jsx)(Se, {
                                    text: "Knights",
                                    image: Be,
                                    callback: function () {
                                        n ? o() : i("Please login")
                                    }
                                }), Object(d.jsx)(Se, {
                                    text: "How To Play",
                                    image: De,
                                    callback: function () {
                                        window.open("".concat("https://telegra.ph/Matic-Realm-10-27"))
                                    }
                                }), Object(d.jsx)(Se, {
                                    text: "Discord",
                                    image: Ye,
                                    callback: function () {
                                        window.open("".concat("https://discord.gg/ENnmNZcpKU"))
                                    }
                                }), Object(d.jsx)(Se, {
                                    style: {
                                        display: "".concat(0 == n ? "none" : "flex", " ")
                                    },
                                    text: "Log Out",
                                    image: Ue,
                                    callback: r
                                })]
                            })
                        })
                    }))
                },
                Ve = function (e) {
                    var t = Object.assign({}, e),
                        a = Object(c.useContext)(U),
                        n = a.connected,
                        r = a.totalInvested,
                        s = a.totalChefs,
                        i = a.totalTowers,
                        o = a.accountTower;
                    return Object(d.jsx)("div", Object(b.a)(Object(b.a)({}, t), {}, {
                        className: "infobar",
                        children: Object(d.jsxs)("div", {
                            className: "infobar__content",
                            children: [Object(d.jsxs)("div", {
                                className: "infobar__item info",
                                children: [Object(d.jsx)("div", {
                                    className: "info__title",
                                    children: "Total Kingdoms"
                                }), Object(d.jsx)("div", {
                                    className: "info__value",
                                    children: i
                                })]
                            }), Object(d.jsxs)("div", {
                                className: "infobar__item info",
                                children: [Object(d.jsx)("div", {
                                    className: "info__title",
                                    children: "Total Deposits"
                                }), Object(d.jsxs)("div", {
                                    className: "info__value",
                                    children: [parseFloat(r).toFixed(4), " MATIC"]
                                })]
                            }), Object(d.jsxs)("div", {
                                className: "infobar__item info",
                                children: [Object(d.jsx)("div", {
                                    className: "info__title",
                                    children: "Total Warriors"
                                }), Object(d.jsx)("div", {
                                    className: "info__value",
                                    children: s
                                })]
                            }), Object(d.jsxs)("div", {
                                className: "infobar__item info",
                                children: [Object(d.jsx)("div", {
                                    className: "info__title",
                                    children: "Your Alliances"
                                }), Object(d.jsx)("div", {
                                    className: "info__value",
                                    children: n ? o.refs ? o.refs : 0 : "---"
                                })]
                            })]
                        })
                    }))
                },
                Re = function (e) {
                    Object.assign({}, e);
                    return Object(d.jsxs)("div", {
                        id: "hud",
                        className: "hud",
                        children: [Object(d.jsx)(Me, {}), Object(d.jsx)(Ve, {}), Object(d.jsx)(Ie, {})]
                    })
                },
                Qe = a(279),
                Ee = function (e) {
                    Object(Qe.a)(e);
                    var t = Object(c.useState)(!0),
                        a = Object(u.a)(t, 2),
                        n = a[0],
                        r = a[1],
                        s = Object(c.useContext)(U),
                        i = s.web3Account,
                        o = s.balanceOf,
                        b = s.address,
                        p = s.connected,
                        j = s.accountTower,
                        m = s.currentBlockTimeStamp,
                        O = s.login,
                        y = Object(c.useContext)(l),
                        v = y.showMessage,
                        x = y.showLoading,
                        g = y.hideLoading,
                        A = H(i, b, p),
                        N = A.esimateGas,
                        C = A.callMethod,
                        T = A.gasPrice,
                        M = Object(c.useContext)(l).showCastleUpgrade,
                        k = Object(c.useState)(0),
                        S = Object(u.a)(k, 2),
                        Y = S[0],
                        D = S[1],
                        I = Object(c.useState)(0),
                        V = Object(u.a)(I, 2),
                        R = V[0],
                        Q = V[1];
                    Object(c.useEffect)((function () {
                        if (p)
                            if (0 != m && 0 != j.yield) {
                                var e = new Date(1e3 * m),
                                    t = new Date(1e3 * j.timestamp),
                                    a = Math.floor(e.getTime() / 36e5) - Math.floor(t.getTime() / 36e5),
                                    n = B[j.treasury],
                                    r = Math.min(a + parseFloat(j.hrs), n.time);
                                Q(r), D(Math.floor(100 * r / n.time))
                            } else D(0)
                    }), [m]);
                    var E = Object(c.useCallback)((function () {
                            j.treasury >= 4 || !p || M()
                        }), [p, j]),
                        P = Object(c.useCallback)(Object(f.a)(Object(h.a)().mark((function e() {
                            var t, a;
                            return Object(h.a)().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, T();
                                    case 2:
                                        return t = e.sent, e.next = 5, N(W, {});
                                    case 5:
                                        return a = e.sent, e.abrupt("return", {
                                            price: t,
                                            esimated: a
                                        });
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [i, b, p]),
                        F = function () {
                            var e = Object(f.a)(Object(h.a)().mark((function e() {
                                var t, a, n, c, s, u;
                                return Object(h.a)().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (p) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            if (!(R <= 0 || 0 == j.yield)) {
                                                e.next = 5;
                                                break
                                            }
                                            return v("No coins available"), e.abrupt("return");
                                        case 5:
                                            return r(!1), e.prev = 6, e.next = 9, P();
                                        case 9:
                                            if (t = e.sent, a = t.price, n = t.esimated, c = new K.a(a), s = new K.a(n), u = i.utils.fromWei(c.multipliedBy(s).toFixed(), "ether"), !(o < u)) {
                                                e.next = 19;
                                                break
                                            }
                                            return v("Not enough MATIC for transaction complete."), r(!0), e.abrupt("return");
                                        case 19:
                                            C(W, {}, (function (e) {
                                                g(), v("".concat(e)), r(!0)
                                            }), (function () {
                                                x(), r(!0)
                                            }), (function (e) {
                                                g(), v("".concat(e)), r(!0)
                                            }), (function () {
                                                g(), v("Success"), r(!0)
                                            })), e.next = 27;
                                            break;
                                        case 22:
                                            e.prev = 22, e.t0 = e.catch(6), console.log(e.t0), v(e.t0.message ? e.t0.message : "Failure"), r(!0);
                                        case 27:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [6, 22]
                                ])
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }();
                    return Object(d.jsxs)("div", {
                        className: "castle",
                        children: [Object(d.jsxs)("div", {
                            className: "castle__body",
                            children: [Object(d.jsx)("div", {
                                className: "castle__upgrade",
                                style: {
                                    visibility: "".concat(p && j.treasury < 4 ? "visible" : "hidden")
                                },
                                onClick: function () {
                                    E()
                                }
                            }), Object(d.jsx)("div", {
                                className: "castle__image castle__image-0 ".concat(j.treasury && 0 != j.treasury ? "" : "active"),
                                onClick: function () {
                                    E()
                                }
                            }), Object(d.jsx)("div", {
                                className: "castle__image castle__image-1 ".concat(p && 1 == j.treasury ? "active" : ""),
                                onClick: function () {
                                    E()
                                }
                            }), Object(d.jsx)("div", {
                                className: "castle__image castle__image-2 ".concat(p && 2 == j.treasury ? "active" : ""),
                                onClick: function () {
                                    E()
                                }
                            }), Object(d.jsx)("div", {
                                className: "castle__image castle__image-3 ".concat(p && 3 == j.treasury ? "active" : ""),
                                onClick: function () {
                                    E()
                                }
                            }), Object(d.jsx)("div", {
                                className: "castle__image castle__image-4 ".concat(p && 4 == j.treasury ? "active" : "")
                            })]
                        }), Object(d.jsx)("div", {
                            className: "castle__btn",
                            children: p ? Object(d.jsx)(w, {
                                text: "Claim",
                                enable: n,
                                callback: function () {
                                    F()
                                }
                            }) : Object(d.jsx)(w, {
                                text: "Log in",
                                enable: !0,
                                callback: function () {
                                    O()
                                }
                            })
                        }), Object(d.jsx)("div", {
                            className: "castle__progress progress",
                            style: {
                                display: "".concat(p ? "block" : "none")
                            },
                            children: Object(d.jsxs)("div", {
                                className: "progress__inner",
                                children: [Object(d.jsxs)("div", {
                                    className: "progress__value",
                                    children: [Y, "%"]
                                }), Object(d.jsx)("div", {
                                    style: {
                                        width: "".concat(Y, "%")
                                    },
                                    className: "progress__body"
                                })]
                            })
                        })]
                    })
                },
                Pe = ["id"],
                Fe = function (e) {
                    var t = e.id,
                        a = Object(p.a)(e, Pe),
                        n = Object(c.useContext)(U),
                        r = n.connected,
                        s = n.accountTower,
                        i = Object(c.useState)(0),
                        o = Object(u.a)(i, 2),
                        j = o[0],
                        m = o[1],
                        h = Object(c.useContext)(l),
                        f = h.showTowerUpgrade,
                        O = h.showMessage;
                    Object(c.useEffect)((function () {
                        var e = r && s.chefs ? s.chefs[t] : 0;
                        m(e)
                    }), [r, s]);
                    var y = Object(c.useCallback)((function () {
                            j > 5 || (r ? f(t) : O("Please login"))
                        }), [r, s]),
                        w = Object(c.useCallback)((function (e, t) {
                            if (0 == e) {
                                if (0 == t) return 4;
                                if (1 == t) return 3;
                                if (2 == t) return 2;
                                if (3 == t) return 1;
                                if (4 == t) return 0
                            }
                            if (1 == e) {
                                if (0 == t) return 3;
                                if (1 == t) return 4;
                                if (2 == t) return 2;
                                if (3 == t) return 1;
                                if (4 == t) return 0
                            }
                            if (2 == e) {
                                if (0 == t) return 1;
                                if (1 == t) return 0;
                                if (2 == t) return 2;
                                if (3 == t) return 3;
                                if (4 == t) return 4
                            }
                            if (3 == e) {
                                if (0 == t) return 1;
                                if (1 == t) return 0;
                                if (2 == t) return 2;
                                if (3 == t) return 3;
                                if (4 == t) return 4
                            }
                            if (4 == e) {
                                if (0 == t) return 3;
                                if (1 == t) return 4;
                                if (2 == t) return 2;
                                if (3 == t) return 1;
                                if (4 == t) return 0
                            }
                        }), []),
                        v = Object(c.useCallback)((function (e, t) {
                            if (0 == e) {
                                if (0 == t) return 0;
                                if (1 == t) return 1;
                                if (2 == t) return 2;
                                if (3 == t) return 3;
                                if (4 == t) return 4
                            }
                            if (1 == e) {
                                if (0 == t) return 0;
                                if (1 == t) return 1;
                                if (2 == t) return 2;
                                if (3 == t) return 3;
                                if (4 == t) return 4
                            }
                            if (2 == e) {
                                if (0 == t) return 4;
                                if (1 == t) return 3;
                                if (2 == t) return 2;
                                if (3 == t) return 1;
                                if (4 == t) return 0
                            }
                            if (3 == e) {
                                if (0 == t) return 4;
                                if (1 == t) return 3;
                                if (2 == t) return 2;
                                if (3 == t) return 1;
                                if (4 == t) return 0
                            }
                            if (4 == e) {
                                if (0 == t) return 0;
                                if (1 == t) return 1;
                                if (2 == t) return 2;
                                if (3 == t) return 3;
                                if (4 == t) return 4
                            }
                        }), []);
                    return Object(d.jsx)("div", Object(b.a)(Object(b.a)({}, a), {}, {
                        className: "tower tower-".concat(t),
                        children: Object(d.jsxs)("div", {
                            className: "tower__content",
                            children: [Object(d.jsx)("div", {
                                className: "tower__build ".concat(0 == j ? "" : "hidden"),
                                onClick: y
                            }), Object(d.jsxs)("div", {
                                className: "tower__object ".concat(0 == j ? "hidden" : ""),
                                onClick: y,
                                children: [Object(d.jsx)("div", {
                                    className: "tower__upgrade ".concat(0 != j && j < 6 ? "" : "hidden")
                                }), Object(d.jsx)("div", {
                                    className: "tower__body tower__body-1 ".concat(1 == j ? "" : "hidden")
                                }), Object(d.jsx)("div", {
                                    className: "tower__body tower__body-2 ".concat(2 == j ? "" : "hidden")
                                }), Object(d.jsx)("div", {
                                    className: "tower__body tower__body-3 ".concat(3 == j ? "" : "hidden")
                                }), Object(d.jsx)("div", {
                                    className: "tower__body tower__body-4 ".concat(4 == j ? "" : "hidden")
                                }), Object(d.jsx)("div", {
                                    className: "tower__body tower__body-5 ".concat(5 == j ? "" : "hidden")
                                }), Object(d.jsx)("div", {
                                    className: "tower__body tower__body-5 tower__body-6 ".concat(6 == j ? "" : "hidden")
                                })]
                            }), Object(d.jsx)("div", {
                                className: "tower__warriors warriors ".concat(0 == j ? "hidden" : ""),
                                children: Object(d.jsxs)("div", {
                                    className: "tower__warrior-inner",
                                    children: [Object(d.jsx)("div", {
                                        className: "tower__warrior tower__warrior-".concat(v(t, 0), " ").concat(j < 1 ? "hidden" : "")
                                    }), Object(d.jsx)("div", {
                                        className: "tower__warrior tower__warrior-".concat(v(t, 1), " ").concat(j < 2 ? "hidden" : "")
                                    }), Object(d.jsx)("div", {
                                        className: "tower__warrior tower__warrior-".concat(v(t, 2), " ").concat(j < 3 ? "hidden" : "")
                                    }), Object(d.jsx)("div", {
                                        className: "tower__warrior tower__warrior-".concat(v(t, 3), " ").concat(j < 4 ? "hidden" : "")
                                    }), Object(d.jsx)("div", {
                                        className: "tower__warrior tower__warrior-".concat(v(t, 4), " ").concat(j < 5 ? "hidden" : "")
                                    })]
                                })
                            }), Object(d.jsx)("div", {
                                className: "tower__fight fight ".concat(0 == j ? "hidden" : ""),
                                children: Object(d.jsx)("div", {
                                    className: "tower__warrior-inner",
                                    children: Object(d.jsx)("div", {
                                        className: "fight ".concat(j < 1 ? "hidden" : "")
                                    })
                                })
                            }), Object(d.jsx)("div", {
                                className: "tower__orcs orcs ".concat(0 == j ? "hidden" : ""),
                                children: Object(d.jsxs)("div", {
                                    className: "tower__orc-inner",
                                    children: [Object(d.jsx)("div", {
                                        className: "tower__orc tower__orc-".concat(w(t, 0), " ").concat(j < 1 ? "hidden" : "")
                                    }), Object(d.jsx)("div", {
                                        className: "tower__orc tower__orc-".concat(w(t, 1), " ").concat(j < 2 ? "hidden" : "")
                                    }), Object(d.jsx)("div", {
                                        className: "tower__orc tower__orc-".concat(w(t, 2), " ").concat(j < 3 ? "hidden" : "")
                                    }), Object(d.jsx)("div", {
                                        className: "tower__orc tower__orc-".concat(w(t, 3), " ").concat(j < 4 ? "hidden" : "")
                                    }), Object(d.jsx)("div", {
                                        className: "tower__orc tower__orc-".concat(w(t, 4), " ").concat(j < 5 ? "hidden" : "")
                                    })]
                                })
                            })]
                        })
                    }))
                },
                Je = function () {
                    return Object(d.jsx)("div", {
                        className: "board",
                        id: "board",
                        children: Object(d.jsx)("div", {
                            className: "board__wrapper",
                            children: Object(d.jsx)("div", {
                                className: "board__inner",
                                children: Object(d.jsxs)("div", {
                                    className: "board__body",
                                    children: [Object(d.jsx)(Ee, {}), Object(d.jsx)(Fe, {
                                        id: 0
                                    }), Object(d.jsx)(Fe, {
                                        id: 1
                                    }), Object(d.jsx)(Fe, {
                                        id: 2
                                    }), Object(d.jsx)(Fe, {
                                        id: 3
                                    }), Object(d.jsx)(Fe, {
                                        id: 4
                                    })]
                                })
                            })
                        })
                    })
                },
                Le = a.p + "images/splash-screen.52216d6f.jpg",
                We = function () {
                    var e = Object(c.useState)(!0),
                        t = Object(u.a)(e, 2),
                        a = t[0],
                        n = t[1];
                    return Object(c.useEffect)((function () {
                        setTimeout((function () {
                            n(!1)
                        }), 2e3)
                    }), []), Object(d.jsx)("div", {
                        className: "splash-screen ".concat(a ? "" : "hide"),
                        children: Object(d.jsx)("img", {
                            src: Le
                        })
                    })
                },
                He = a(177),
                Xe = a.p + "images/mobile-icon.4a4f6b3c.png",
                Ke = function () {
                    var e = Object(c.useState)(!1),
                        t = Object(u.a)(e, 2),
                        a = t[0],
                        n = t[1],
                        r = Object(He.useMobileOrientation)().isPortrait;
                    return Object(d.jsxs)("div", {
                        className: "mobile-screen",
                        style: {
                            display: "".concat(He.isMobile && r && !a ? "flex" : "none")
                        },
                        children: [Object(d.jsx)("div", {
                            className: "mobile-screen__close",
                            onClick: function () {
                                n(!0)
                            }
                        }), Object(d.jsx)("img", {
                            src: Xe
                        }), Object(d.jsx)("p", {
                            children: "Please change your phone orientation for better experience"
                        })]
                    })
                },
                Ge = function () {
                    var e = Object(ue.b)(),
                        t = Object(u.a)(e, 2),
                        a = (t[0], t[1]),
                        n = ae(),
                        r = (n.cookies, n.setupCookies);
                    return Object(c.useEffect)((function () {
                        var e = new URLSearchParams(window.location.search);
                        null != e && (e.get("p") && me.a.utils.isAddress(e.get("p")) && r(e.get("p")), a(""))
                    }), []), Object(d.jsxs)("div", {
                        id: "main",
                        children: [Object(d.jsx)(We, {}), Object(d.jsx)(Ke, {}), Object(d.jsx)(Je, {}), Object(d.jsx)(Re, {})]
                    })
                },
                ze = function () {
                    var e = function () {
                            var e = Object(c.useState)(!1),
                                t = Object(u.a)(e, 2),
                                a = t[0],
                                n = t[1],
                                r = Object(c.useState)(null),
                                s = Object(u.a)(r, 2),
                                i = s[0],
                                o = s[1],
                                l = Object(c.useState)(null),
                                b = Object(u.a)(l, 2),
                                p = b[0],
                                d = b[1],
                                j = Object(c.useState)(null),
                                m = Object(u.a)(j, 2),
                                O = m[0],
                                y = m[1],
                                w = Object(c.useState)([M]),
                                v = Object(u.a)(w, 2),
                                x = v[0],
                                g = v[1],
                                A = Object(c.useState)(null),
                                N = Object(u.a)(A, 2),
                                C = N[0],
                                T = N[1],
                                k = Object(c.useCallback)((function () {
                                    d(null), o(""), n(!1), y(null), g([M])
                                }));
                            Object(c.useEffect)((function () {
                                T(new be.a({
                                    network: "mainnet",
                                    cacheProvider: !1,
                                    theme: "light",
                                    providerOptions: pe,
                                    shouldCacheProvider: !1
                                }))
                            }), []), Object(c.useEffect)((function () {
                                try {
                                    if (null == O || !O.on) return;
                                    O.on("disconnect", (function (e) {
                                        if (e) return console.log("disconnect:", e), void(1e3 === e && Y());
                                        Y()
                                    })), O.on("accountsChanged", function () {
                                        var e = Object(f.a)(Object(h.a)().mark((function e(t) {
                                            return Object(h.a)().wrap((function (e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        o(t[0]);
                                                    case 1:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function (t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()), O.on("chainChanged", function () {
                                        var e = Object(f.a)(Object(h.a)().mark((function e(t) {
                                            return Object(h.a)().wrap((function (e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        t !== "0x".concat(Number.parseInt(M).toString(16)) && Y();
                                                    case 1:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function (t) {
                                            return e.apply(this, arguments)
                                        }
                                    }())
                                } catch (e) {
                                    console.log("chainChanged:", e)
                                }
                            }), [O]);
                            var S = function () {
                                    var e = Object(f.a)(Object(h.a)().mark((function e() {
                                        var t, a, r, c;
                                        return Object(h.a)().wrap((function (e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return window.sessionStorage.getItem("_was_connected") || window.sessionStorage.setItem("_was_connected", "true"), e.prev = 1, e.next = 4, C.clearCachedProvider();
                                                case 4:
                                                    return e.next = 6, C.connect();
                                                case 6:
                                                    return t = e.sent, a = he(t), e.next = 10, a.eth.getAccounts();
                                                case 10:
                                                    return r = e.sent, c = r[0], e.prev = 12, e.next = 15, de(M, a.currentProvider);
                                                case 15:
                                                    if (e.sent) {
                                                        e.next = 18;
                                                        break
                                                    }
                                                    return e.abrupt("return");
                                                case 18:
                                                    window.web3 = a, d(a), n(!0), o(c), g([M]), y(t), e.next = 30;
                                                    break;
                                                case 26:
                                                    e.prev = 26, e.t0 = e.catch(12), alert(e.t0), Y();
                                                case 30:
                                                    e.next = 35;
                                                    break;
                                                case 32:
                                                    e.prev = 32, e.t1 = e.catch(1), console.log("On connect error:", e.t1);
                                                case 35:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [1, 32],
                                            [12, 26]
                                        ])
                                    })));
                                    return function () {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                Y = function () {
                                    var e = Object(f.a)(Object(h.a)().mark((function e() {
                                        return Object(h.a)().wrap((function (e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return window.sessionStorage.getItem("_was_connected") && window.sessionStorage.removeItem("_was_connected"), e.prev = 1, p && p.currentProvider && p.currentProvider.close && p.currentProvider.close(), e.next = 5, C.resetState();
                                                case 5:
                                                    return e.next = 7, C.clearCachedProvider();
                                                case 7:
                                                    window.localStorage.clear(), k(), document.location.reload(), e.next = 15;
                                                    break;
                                                case 12:
                                                    e.prev = 12, e.t0 = e.catch(1), console.log(e.t0);
                                                case 15:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [1, 12]
                                        ])
                                    })));
                                    return function () {
                                        return e.apply(this, arguments)
                                    }
                                }();
                            return {
                                web3Modal: C,
                                web3Account: p,
                                chainId: x,
                                connected: a,
                                address: i,
                                login: S,
                                logout: Y
                            }
                        }(),
                        t = e.web3Modal,
                        a = e.web3Account,
                        n = e.chainId,
                        r = e.connected,
                        s = e.address,
                        i = e.login,
                        o = e.logout,
                        l = function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                t = Object(c.useState)(0),
                                a = Object(u.a)(t, 2),
                                n = a[0],
                                r = a[1],
                                s = Object(c.useState)(0),
                                i = Object(u.a)(s, 2),
                                o = i[0],
                                l = i[1],
                                b = Object(c.useState)(0),
                                p = Object(u.a)(b, 2),
                                d = p[0],
                                j = p[1],
                                m = Object(c.useState)({}),
                                O = Object(u.a)(m, 2),
                                y = O[0],
                                w = O[1],
                                v = Object(c.useState)(0),
                                x = Object(u.a)(v, 2),
                                g = x[0],
                                A = x[1],
                                N = Object(c.useState)(0),
                                C = Object(u.a)(N, 2),
                                T = C[0],
                                M = C[1],
                                S = Object(c.useState)(!1),
                                Y = Object(u.a)(S, 2),
                                B = Y[0],
                                D = Y[1],
                                U = new me.a(k),
                                I = new fe.a({
                                    web3Instance: U,
                                    ryAggregate: !0
                                });
                            return Object(c.useEffect)((function () {
                                function t() {
                                    return a.apply(this, arguments)
                                }

                                function a() {
                                    return (a = Object(f.a)(Object(h.a)().mark((function t() {
                                        var a, n, c, s;
                                        return Object(h.a)().wrap((function (t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return a = we(e), t.prev = 1, t.next = 4, I.call(a);
                                                case 4:
                                                    if (n = t.sent, c = n.results.KingdomCash.callsReturnContext, r(me.a.utils.fromWei(ve(c[0]), "ether")), l(ve(c[1])), j(ve(c[2])), D(c[3].returnValues[0]), !(null != e && c.length > 4)) {
                                                        t.next = 19;
                                                        break
                                                    }
                                                    if (s = n.results.MulticallV3.callsReturnContext, !(T > ve(s[1]))) {
                                                        t.next = 14;
                                                        break
                                                    }
                                                    return t.abrupt("return");
                                                case 14:
                                                    w(xe(c[4], c[5])), A(me.a.utils.fromWei(ve(s[0]))), M(ve(s[1])), t.next = 20;
                                                    break;
                                                case 19:
                                                    w({});
                                                case 20:
                                                    t.next = 25;
                                                    break;
                                                case 22:
                                                    t.prev = 22, t.t0 = t.catch(1), console.log(t.t0);
                                                case 25:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t, null, [
                                            [1, 22]
                                        ])
                                    })))).apply(this, arguments)
                                }
                                t();
                                var n = setInterval((function () {
                                    t()
                                }), 3e3);
                                return function () {
                                    return clearInterval(n)
                                }
                            }), [e]), {
                                totalInvested: n,
                                totalChefs: o,
                                totalTowers: d,
                                accountTower: y,
                                balanceOf: g,
                                currentBlockTimeStamp: T,
                                init: B
                            }
                        }(s),
                        b = l.totalInvested,
                        p = l.totalChefs,
                        j = l.totalTowers,
                        m = l.accountTower,
                        O = l.balanceOf,
                        y = l.currentBlockTimeStamp,
                        w = l.init;
                    return Object(d.jsx)(ue.a, {
                        children: Object(d.jsx)("div", {
                            className: "App",
                            children: Object(d.jsx)(U.Provider, {
                                value: {
                                    web3Modal: t,
                                    web3Account: a,
                                    chainId: n,
                                    connected: r,
                                    address: s,
                                    login: i,
                                    logout: o,
                                    totalInvested: b,
                                    totalChefs: p,
                                    totalTowers: j,
                                    accountTower: m,
                                    balanceOf: O,
                                    currentBlockTimeStamp: y,
                                    init: w
                                },
                                children: Object(d.jsx)(oe, {
                                    children: Object(d.jsx)(Ge, {})
                                })
                            })
                        })
                    })
                };
            a(511);
            o.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(ze, {}))
        }
    },
    [
        [512, 1, 2]
    ]
]);
//# sourceMappingURL=main.f1be2db8.chunk.js.map