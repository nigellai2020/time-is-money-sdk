/// <amd-module name="@validapp/time-is-money-sdk/contracts/@openzeppelin/contracts/token/ERC20/ERC20.json.ts" />
declare module "@validapp/time-is-money-sdk/contracts/@openzeppelin/contracts/token/ERC20/ERC20.json.ts" {
    const _default: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default;
}
/// <amd-module name="@validapp/time-is-money-sdk/contracts/@openzeppelin/contracts/token/ERC20/ERC20.ts" />
declare module "@validapp/time-is-money-sdk/contracts/@openzeppelin/contracts/token/ERC20/ERC20.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        name: string;
        symbol: string;
    }
    export interface IAllowanceParams {
        owner: string;
        spender: string;
    }
    export interface IApproveParams {
        spender: string;
        amount: number | BigNumber;
    }
    export interface IDecreaseAllowanceParams {
        spender: string;
        subtractedValue: number | BigNumber;
    }
    export interface IIncreaseAllowanceParams {
        spender: string;
        addedValue: number | BigNumber;
    }
    export interface ITransferParams {
        to: string;
        amount: number | BigNumber;
    }
    export interface ITransferFromParams {
        from: string;
        to: string;
        amount: number | BigNumber;
    }
    export class ERC20 extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): ERC20.ApprovalEvent[];
        decodeApprovalEvent(event: Event): ERC20.ApprovalEvent;
        parseTransferEvent(receipt: TransactionReceipt): ERC20.TransferEvent[];
        decodeTransferEvent(event: Event): ERC20.TransferEvent;
        allowance: {
            (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
        };
        balanceOf: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        decimals: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        decreaseAllowance: {
            (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
        };
        increaseAllowance: {
            (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
        };
        name: {
            (options?: TransactionOptions): Promise<string>;
        };
        symbol: {
            (options?: TransactionOptions): Promise<string>;
        };
        totalSupply: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transfer: {
            (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
        };
        transferFrom: {
            (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
        };
        private assign;
    }
    export module ERC20 {
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            value: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@validapp/time-is-money-sdk/contracts/@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.json.ts" />
declare module "@validapp/time-is-money-sdk/contracts/@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.json.ts" {
    const _default_1: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_1;
}
/// <amd-module name="@validapp/time-is-money-sdk/contracts/@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.ts" />
declare module "@validapp/time-is-money-sdk/contracts/@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        name: string;
        symbol: string;
    }
    export interface IAllowanceParams {
        owner: string;
        spender: string;
    }
    export interface IApproveParams {
        spender: string;
        amount: number | BigNumber;
    }
    export interface IBurnFromParams {
        account: string;
        amount: number | BigNumber;
    }
    export interface IDecreaseAllowanceParams {
        spender: string;
        subtractedValue: number | BigNumber;
    }
    export interface IGetRoleMemberParams {
        role: string;
        index: number | BigNumber;
    }
    export interface IGrantRoleParams {
        role: string;
        account: string;
    }
    export interface IHasRoleParams {
        role: string;
        account: string;
    }
    export interface IIncreaseAllowanceParams {
        spender: string;
        addedValue: number | BigNumber;
    }
    export interface IMintParams {
        to: string;
        amount: number | BigNumber;
    }
    export interface IRenounceRoleParams {
        role: string;
        account: string;
    }
    export interface IRevokeRoleParams {
        role: string;
        account: string;
    }
    export interface ITransferParams {
        to: string;
        amount: number | BigNumber;
    }
    export interface ITransferFromParams {
        from: string;
        to: string;
        amount: number | BigNumber;
    }
    export class ERC20PresetMinterPauser extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): ERC20PresetMinterPauser.ApprovalEvent[];
        decodeApprovalEvent(event: Event): ERC20PresetMinterPauser.ApprovalEvent;
        parsePausedEvent(receipt: TransactionReceipt): ERC20PresetMinterPauser.PausedEvent[];
        decodePausedEvent(event: Event): ERC20PresetMinterPauser.PausedEvent;
        parseRoleAdminChangedEvent(receipt: TransactionReceipt): ERC20PresetMinterPauser.RoleAdminChangedEvent[];
        decodeRoleAdminChangedEvent(event: Event): ERC20PresetMinterPauser.RoleAdminChangedEvent;
        parseRoleGrantedEvent(receipt: TransactionReceipt): ERC20PresetMinterPauser.RoleGrantedEvent[];
        decodeRoleGrantedEvent(event: Event): ERC20PresetMinterPauser.RoleGrantedEvent;
        parseRoleRevokedEvent(receipt: TransactionReceipt): ERC20PresetMinterPauser.RoleRevokedEvent[];
        decodeRoleRevokedEvent(event: Event): ERC20PresetMinterPauser.RoleRevokedEvent;
        parseTransferEvent(receipt: TransactionReceipt): ERC20PresetMinterPauser.TransferEvent[];
        decodeTransferEvent(event: Event): ERC20PresetMinterPauser.TransferEvent;
        parseUnpausedEvent(receipt: TransactionReceipt): ERC20PresetMinterPauser.UnpausedEvent[];
        decodeUnpausedEvent(event: Event): ERC20PresetMinterPauser.UnpausedEvent;
        DEFAULT_ADMIN_ROLE: {
            (options?: TransactionOptions): Promise<string>;
        };
        MINTER_ROLE: {
            (options?: TransactionOptions): Promise<string>;
        };
        PAUSER_ROLE: {
            (options?: TransactionOptions): Promise<string>;
        };
        allowance: {
            (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
        };
        balanceOf: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        burn: {
            (amount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (amount: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        burnFrom: {
            (params: IBurnFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IBurnFromParams, options?: TransactionOptions) => Promise<void>;
        };
        decimals: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        decreaseAllowance: {
            (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
        };
        getRoleAdmin: {
            (role: string, options?: TransactionOptions): Promise<string>;
        };
        getRoleMember: {
            (params: IGetRoleMemberParams, options?: TransactionOptions): Promise<string>;
        };
        getRoleMemberCount: {
            (role: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        grantRole: {
            (params: IGrantRoleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IGrantRoleParams, options?: TransactionOptions) => Promise<void>;
        };
        hasRole: {
            (params: IHasRoleParams, options?: TransactionOptions): Promise<boolean>;
        };
        increaseAllowance: {
            (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
        };
        mint: {
            (params: IMintParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IMintParams, options?: TransactionOptions) => Promise<void>;
        };
        name: {
            (options?: TransactionOptions): Promise<string>;
        };
        pause: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        paused: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        renounceRole: {
            (params: IRenounceRoleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRenounceRoleParams, options?: TransactionOptions) => Promise<void>;
        };
        revokeRole: {
            (params: IRevokeRoleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRevokeRoleParams, options?: TransactionOptions) => Promise<void>;
        };
        supportsInterface: {
            (interfaceId: string, options?: TransactionOptions): Promise<boolean>;
        };
        symbol: {
            (options?: TransactionOptions): Promise<string>;
        };
        totalSupply: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transfer: {
            (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
        };
        transferFrom: {
            (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
        };
        unpause: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        private assign;
    }
    export module ERC20PresetMinterPauser {
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
            _event: Event;
        }
        interface PausedEvent {
            account: string;
            _event: Event;
        }
        interface RoleAdminChangedEvent {
            role: string;
            previousAdminRole: string;
            newAdminRole: string;
            _event: Event;
        }
        interface RoleGrantedEvent {
            role: string;
            account: string;
            sender: string;
            _event: Event;
        }
        interface RoleRevokedEvent {
            role: string;
            account: string;
            sender: string;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            value: BigNumber;
            _event: Event;
        }
        interface UnpausedEvent {
            account: string;
            _event: Event;
        }
    }
}
/// <amd-module name="@validapp/time-is-money-sdk/contracts/Rewards.json.ts" />
declare module "@validapp/time-is-money-sdk/contracts/Rewards.json.ts" {
    const _default_2: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_2;
}
/// <amd-module name="@validapp/time-is-money-sdk/contracts/Rewards.ts" />
declare module "@validapp/time-is-money-sdk/contracts/Rewards.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        timeIsMoney: string;
        token: string;
        multiplier: number | BigNumber;
        initialReward: number | BigNumber;
        vestingPeriod: number | BigNumber;
        claimDeadline: number | BigNumber;
        admin: string;
    }
    export interface IPutFundParams {
        from: string;
        amount: number | BigNumber;
    }
    export class Rewards extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseAdminDrainEvent(receipt: TransactionReceipt): Rewards.AdminDrainEvent[];
        decodeAdminDrainEvent(event: Event): Rewards.AdminDrainEvent;
        parseClaimEvent(receipt: TransactionReceipt): Rewards.ClaimEvent[];
        decodeClaimEvent(event: Event): Rewards.ClaimEvent;
        admin: {
            (options?: TransactionOptions): Promise<string>;
        };
        claim: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        claimDeadline: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        claimFor: {
            (account: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (account: string, options?: TransactionOptions) => Promise<void>;
        };
        claimSoFar: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        initialReward: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        multiplier: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        putFund: {
            (params: IPutFundParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IPutFundParams, options?: TransactionOptions) => Promise<void>;
        };
        reward: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        rewardForAccount: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        takeUnclaimed: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        timeIsMoney: {
            (options?: TransactionOptions): Promise<string>;
        };
        token: {
            (options?: TransactionOptions): Promise<string>;
        };
        unclaimed: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        unclaimedForAccount: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        vestingPeriod: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        private assign;
    }
    export module Rewards {
        interface AdminDrainEvent {
            amount: BigNumber;
            _event: Event;
        }
        interface ClaimEvent {
            account: string;
            amount: BigNumber;
            totalSoFar: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@validapp/time-is-money-sdk/contracts/RewardsCommonStartDate.json.ts" />
declare module "@validapp/time-is-money-sdk/contracts/RewardsCommonStartDate.json.ts" {
    const _default_3: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_3;
}
/// <amd-module name="@validapp/time-is-money-sdk/contracts/RewardsCommonStartDate.ts" />
declare module "@validapp/time-is-money-sdk/contracts/RewardsCommonStartDate.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        timeIsMoney: string;
        token: string;
        multiplier: number | BigNumber;
        initialReward: number | BigNumber;
        vestingStartDate: number | BigNumber;
        vestingPeriod: number | BigNumber;
        claimDeadline: number | BigNumber;
        admin: string;
    }
    export interface IPutFundParams {
        from: string;
        amount: number | BigNumber;
    }
    export class RewardsCommonStartDate extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseAdminDrainEvent(receipt: TransactionReceipt): RewardsCommonStartDate.AdminDrainEvent[];
        decodeAdminDrainEvent(event: Event): RewardsCommonStartDate.AdminDrainEvent;
        parseClaimEvent(receipt: TransactionReceipt): RewardsCommonStartDate.ClaimEvent[];
        decodeClaimEvent(event: Event): RewardsCommonStartDate.ClaimEvent;
        admin: {
            (options?: TransactionOptions): Promise<string>;
        };
        claim: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        claimDeadline: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        claimFor: {
            (account: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (account: string, options?: TransactionOptions) => Promise<void>;
        };
        claimSoFar: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        initialReward: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        multiplier: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        putFund: {
            (params: IPutFundParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IPutFundParams, options?: TransactionOptions) => Promise<void>;
        };
        reward: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        rewardForAccount: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        takeUnclaimed: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        timeIsMoney: {
            (options?: TransactionOptions): Promise<string>;
        };
        token: {
            (options?: TransactionOptions): Promise<string>;
        };
        unclaimed: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        unclaimedForAccount: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        vestingPeriod: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        vestingStartDate: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        private assign;
    }
    export module RewardsCommonStartDate {
        interface AdminDrainEvent {
            amount: BigNumber;
            _event: Event;
        }
        interface ClaimEvent {
            account: string;
            amount: BigNumber;
            totalSoFar: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@validapp/time-is-money-sdk/contracts/TimeIsMoney.json.ts" />
declare module "@validapp/time-is-money-sdk/contracts/TimeIsMoney.json.ts" {
    const _default_4: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_4;
}
/// <amd-module name="@validapp/time-is-money-sdk/contracts/TimeIsMoney.ts" />
declare module "@validapp/time-is-money-sdk/contracts/TimeIsMoney.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        token: string;
        maximumTotalLock: number | BigNumber;
        minimumLockTime: number | BigNumber;
        startOfEntryPeriod: number | BigNumber;
        endOfEntryPeriod: number | BigNumber;
        perAddressCap: number | BigNumber;
    }
    export class TimeIsMoney extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseDepositEvent(receipt: TransactionReceipt): TimeIsMoney.DepositEvent[];
        decodeDepositEvent(event: Event): TimeIsMoney.DepositEvent;
        parseWithdrawalEvent(receipt: TransactionReceipt): TimeIsMoney.WithdrawalEvent[];
        decodeWithdrawalEvent(event: Event): TimeIsMoney.WithdrawalEvent;
        endOfEntryPeriod: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        getCredit: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        lock: {
            (amount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (amount: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        lockAmount: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        maximumTotalLock: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        minimumLockTime: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        perAddressCap: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        readyToWithdraw: {
            (account: string, options?: TransactionOptions): Promise<boolean>;
        };
        releaseTime: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        startOfEntryPeriod: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        token: {
            (options?: TransactionOptions): Promise<string>;
        };
        totalLocked: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        withdraw: {
            (allowWithdrawalBeforeRelease: boolean, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (allowWithdrawalBeforeRelease: boolean, options?: TransactionOptions) => Promise<void>;
        };
        withdrawn: {
            (param1: string, options?: TransactionOptions): Promise<boolean>;
        };
        private assign;
    }
    export module TimeIsMoney {
        interface DepositEvent {
            account: string;
            amount: BigNumber;
            _event: Event;
        }
        interface WithdrawalEvent {
            account: string;
            amount: BigNumber;
            heldLongEnough: boolean;
            _event: Event;
        }
    }
}
/// <amd-module name="@validapp/time-is-money-sdk/contracts/TimeIsMoneyEther.json.ts" />
declare module "@validapp/time-is-money-sdk/contracts/TimeIsMoneyEther.json.ts" {
    const _default_5: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_5;
}
/// <amd-module name="@validapp/time-is-money-sdk/contracts/TimeIsMoneyEther.ts" />
declare module "@validapp/time-is-money-sdk/contracts/TimeIsMoneyEther.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        maximumTotalLock: number | BigNumber;
        minimumLockTime: number | BigNumber;
        startOfEntryPeriod: number | BigNumber;
        endOfEntryPeriod: number | BigNumber;
        perAddressCap: number | BigNumber;
    }
    export class TimeIsMoneyEther extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseDepositEvent(receipt: TransactionReceipt): TimeIsMoneyEther.DepositEvent[];
        decodeDepositEvent(event: Event): TimeIsMoneyEther.DepositEvent;
        parseWithdrawalEvent(receipt: TransactionReceipt): TimeIsMoneyEther.WithdrawalEvent[];
        decodeWithdrawalEvent(event: Event): TimeIsMoneyEther.WithdrawalEvent;
        endOfEntryPeriod: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        getCredit: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        lock: {
            (options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: number | BigNumber | TransactionOptions) => Promise<void>;
        };
        lockAmount: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        maximumTotalLock: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        minimumLockTime: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        perAddressCap: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        readyToWithdraw: {
            (account: string, options?: TransactionOptions): Promise<boolean>;
        };
        releaseTime: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        startOfEntryPeriod: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        totalLocked: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        withdraw: {
            (allowWithdrawalBeforeRelease: boolean, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (allowWithdrawalBeforeRelease: boolean, options?: TransactionOptions) => Promise<void>;
        };
        withdrawn: {
            (param1: string, options?: TransactionOptions): Promise<boolean>;
        };
        private assign;
    }
    export module TimeIsMoneyEther {
        interface DepositEvent {
            account: string;
            amount: BigNumber;
            _event: Event;
        }
        interface WithdrawalEvent {
            account: string;
            amount: BigNumber;
            heldLongEnough: boolean;
            _event: Event;
        }
    }
}
/// <amd-module name="@validapp/time-is-money-sdk/contracts/test/FakeTimeIsMoney.json.ts" />
declare module "@validapp/time-is-money-sdk/contracts/test/FakeTimeIsMoney.json.ts" {
    const _default_6: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_6;
}
/// <amd-module name="@validapp/time-is-money-sdk/contracts/test/FakeTimeIsMoney.ts" />
declare module "@validapp/time-is-money-sdk/contracts/test/FakeTimeIsMoney.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export class FakeTimeIsMoney extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(token: string, options?: TransactionOptions): Promise<string>;
        parseDepositEvent(receipt: TransactionReceipt): FakeTimeIsMoney.DepositEvent[];
        decodeDepositEvent(event: Event): FakeTimeIsMoney.DepositEvent;
        parseWithdrawalEvent(receipt: TransactionReceipt): FakeTimeIsMoney.WithdrawalEvent[];
        decodeWithdrawalEvent(event: Event): FakeTimeIsMoney.WithdrawalEvent;
        amount: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        endOfEntryPeriod: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        getCredit: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        lock: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<void>;
        };
        lockAmount: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        maximumTotalLock: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        minimumLockTime: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        perAddressCap: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        readyToWithdraw: {
            (param1: string, options?: TransactionOptions): Promise<boolean>;
        };
        releaseTime: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        setAmount: {
            (amount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (amount: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        startOfEntryPeriod: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        token: {
            (options?: TransactionOptions): Promise<string>;
        };
        totalLocked: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        withdraw: {
            (param1: boolean, options?: TransactionOptions): Promise<void>;
        };
        withdrawn: {
            (param1: string, options?: TransactionOptions): Promise<boolean>;
        };
        private assign;
    }
    export module FakeTimeIsMoney {
        interface DepositEvent {
            account: string;
            amount: BigNumber;
            _event: Event;
        }
        interface WithdrawalEvent {
            account: string;
            amount: BigNumber;
            heldLongEnough: boolean;
            _event: Event;
        }
    }
}
/// <amd-module name="@validapp/time-is-money-sdk/contracts/test/TestERC20.json.ts" />
declare module "@validapp/time-is-money-sdk/contracts/test/TestERC20.json.ts" {
    const _default_7: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_7;
}
/// <amd-module name="@validapp/time-is-money-sdk/contracts/test/TestERC20.ts" />
declare module "@validapp/time-is-money-sdk/contracts/test/TestERC20.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        name: string;
        symbol: string;
        decimals: number | BigNumber;
    }
    export interface IAllowanceParams {
        owner: string;
        spender: string;
    }
    export interface IApproveParams {
        spender: string;
        amount: number | BigNumber;
    }
    export interface IBurnFromParams {
        account: string;
        amount: number | BigNumber;
    }
    export interface IDecreaseAllowanceParams {
        spender: string;
        subtractedValue: number | BigNumber;
    }
    export interface IGetRoleMemberParams {
        role: string;
        index: number | BigNumber;
    }
    export interface IGrantRoleParams {
        role: string;
        account: string;
    }
    export interface IHasRoleParams {
        role: string;
        account: string;
    }
    export interface IIncreaseAllowanceParams {
        spender: string;
        addedValue: number | BigNumber;
    }
    export interface IMintParams {
        to: string;
        amount: number | BigNumber;
    }
    export interface IRenounceRoleParams {
        role: string;
        account: string;
    }
    export interface IRevokeRoleParams {
        role: string;
        account: string;
    }
    export interface ITransferParams {
        to: string;
        amount: number | BigNumber;
    }
    export interface ITransferFromParams {
        from: string;
        to: string;
        amount: number | BigNumber;
    }
    export class TestERC20 extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): TestERC20.ApprovalEvent[];
        decodeApprovalEvent(event: Event): TestERC20.ApprovalEvent;
        parsePausedEvent(receipt: TransactionReceipt): TestERC20.PausedEvent[];
        decodePausedEvent(event: Event): TestERC20.PausedEvent;
        parseRoleAdminChangedEvent(receipt: TransactionReceipt): TestERC20.RoleAdminChangedEvent[];
        decodeRoleAdminChangedEvent(event: Event): TestERC20.RoleAdminChangedEvent;
        parseRoleGrantedEvent(receipt: TransactionReceipt): TestERC20.RoleGrantedEvent[];
        decodeRoleGrantedEvent(event: Event): TestERC20.RoleGrantedEvent;
        parseRoleRevokedEvent(receipt: TransactionReceipt): TestERC20.RoleRevokedEvent[];
        decodeRoleRevokedEvent(event: Event): TestERC20.RoleRevokedEvent;
        parseTransferEvent(receipt: TransactionReceipt): TestERC20.TransferEvent[];
        decodeTransferEvent(event: Event): TestERC20.TransferEvent;
        parseUnpausedEvent(receipt: TransactionReceipt): TestERC20.UnpausedEvent[];
        decodeUnpausedEvent(event: Event): TestERC20.UnpausedEvent;
        DEFAULT_ADMIN_ROLE: {
            (options?: TransactionOptions): Promise<string>;
        };
        MINTER_ROLE: {
            (options?: TransactionOptions): Promise<string>;
        };
        PAUSER_ROLE: {
            (options?: TransactionOptions): Promise<string>;
        };
        _decimals: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        allowance: {
            (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
        };
        balanceOf: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        burn: {
            (amount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (amount: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        burnFrom: {
            (params: IBurnFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IBurnFromParams, options?: TransactionOptions) => Promise<void>;
        };
        decimals: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        decreaseAllowance: {
            (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
        };
        getRoleAdmin: {
            (role: string, options?: TransactionOptions): Promise<string>;
        };
        getRoleMember: {
            (params: IGetRoleMemberParams, options?: TransactionOptions): Promise<string>;
        };
        getRoleMemberCount: {
            (role: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        grantRole: {
            (params: IGrantRoleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IGrantRoleParams, options?: TransactionOptions) => Promise<void>;
        };
        hasRole: {
            (params: IHasRoleParams, options?: TransactionOptions): Promise<boolean>;
        };
        increaseAllowance: {
            (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
        };
        mint: {
            (params: IMintParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IMintParams, options?: TransactionOptions) => Promise<void>;
        };
        name: {
            (options?: TransactionOptions): Promise<string>;
        };
        pause: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        paused: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        renounceRole: {
            (params: IRenounceRoleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRenounceRoleParams, options?: TransactionOptions) => Promise<void>;
        };
        revokeRole: {
            (params: IRevokeRoleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRevokeRoleParams, options?: TransactionOptions) => Promise<void>;
        };
        supportsInterface: {
            (interfaceId: string, options?: TransactionOptions): Promise<boolean>;
        };
        symbol: {
            (options?: TransactionOptions): Promise<string>;
        };
        totalSupply: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transfer: {
            (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
        };
        transferFrom: {
            (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
        };
        unpause: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        private assign;
    }
    export module TestERC20 {
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
            _event: Event;
        }
        interface PausedEvent {
            account: string;
            _event: Event;
        }
        interface RoleAdminChangedEvent {
            role: string;
            previousAdminRole: string;
            newAdminRole: string;
            _event: Event;
        }
        interface RoleGrantedEvent {
            role: string;
            account: string;
            sender: string;
            _event: Event;
        }
        interface RoleRevokedEvent {
            role: string;
            account: string;
            sender: string;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            value: BigNumber;
            _event: Event;
        }
        interface UnpausedEvent {
            account: string;
            _event: Event;
        }
    }
}
/// <amd-module name="@validapp/time-is-money-sdk/contracts/index.ts" />
declare module "@validapp/time-is-money-sdk/contracts/index.ts" {
    export { ERC20 } from "@validapp/time-is-money-sdk/contracts/@openzeppelin/contracts/token/ERC20/ERC20.ts";
    export { ERC20PresetMinterPauser } from "@validapp/time-is-money-sdk/contracts/@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.ts";
    export { Rewards } from "@validapp/time-is-money-sdk/contracts/Rewards.ts";
    export { RewardsCommonStartDate } from "@validapp/time-is-money-sdk/contracts/RewardsCommonStartDate.ts";
    export { TimeIsMoney } from "@validapp/time-is-money-sdk/contracts/TimeIsMoney.ts";
    export { TimeIsMoneyEther } from "@validapp/time-is-money-sdk/contracts/TimeIsMoneyEther.ts";
    export { FakeTimeIsMoney } from "@validapp/time-is-money-sdk/contracts/test/FakeTimeIsMoney.ts";
    export { TestERC20 } from "@validapp/time-is-money-sdk/contracts/test/TestERC20.ts";
}
/// <amd-module name="@validapp/time-is-money-sdk" />
declare module "@validapp/time-is-money-sdk" {
    export * as Contracts from "@validapp/time-is-money-sdk/contracts/index.ts";
}
